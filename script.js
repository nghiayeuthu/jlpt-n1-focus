const questions = [
  {
    type: "vocab",
    label: "Từ vựng",
    prompt: "次の文の（　）に入れるのに最もよいものを選びなさい。\n新制度の導入により、業務の効率化が（　）された。",
    options: ["促進", "促成", "促進する", "催促"],
    answer: 0,
    explanation: "促進 là danh từ chỉ sự thúc đẩy, đẩy nhanh tiến triển. 促進された nghĩa là 'được thúc đẩy'.",
  },
  {
    type: "grammar",
    label: "Ngữ pháp",
    prompt: "この計画は、予算の問題（　）、実現は難しいだろう。",
    options: ["を皮切りに", "いかんによっては", "をめぐって", "にかこつけて"],
    answer: 1,
    explanation: "Nいかんによっては nghĩa là 'tùy vào...', thường dùng trong văn viết trang trọng.",
  },
  {
    type: "reading",
    label: "Đọc hiểu",
    passage:
      "現代社会では、情報を早く得る能力だけでなく、その情報を疑い、整理し、自分の判断に結びつける力が求められている。速さだけを重視すれば、誤った情報に流される危険も高まる。",
    prompt: "筆者が最も言いたいことは何か。",
    options: [
      "情報は早く集めれば集めるほど価値が高い。",
      "現代では情報を疑わず受け入れる姿勢が必要だ。",
      "情報を得る速さより、判断につなげる力も重要だ。",
      "誤情報を避けるには情報を見ないほうがよい。",
    ],
    answer: 2,
    explanation: "Đoạn văn nhấn mạnh không chỉ lấy thông tin nhanh mà còn phải nghi ngờ, sắp xếp và tự phán đoán.",
  },
  {
    type: "grammar",
    label: "Ngữ pháp",
    prompt: "彼は専門家（　）、基本的な説明を省かず丁寧に話してくれた。",
    options: ["とあって", "ともなると", "でありながら", "にひきかえ"],
    answer: 2,
    explanation: "Nでありながら diễn tả 'tuy là... nhưng...', phù hợp với ý chuyên gia nhưng vẫn giải thích kỹ.",
  },
  {
    type: "vocab",
    label: "Từ vựng",
    prompt: "社長は新規事業への投資に（　）姿勢を示した。",
    options: ["前向きな", "前置きな", "前払いな", "前倒しな"],
    answer: 0,
    explanation: "前向きな姿勢 nghĩa là thái độ tích cực, sẵn sàng tiến hành.",
  },
];

const cards = [
  { tag: "vocab", jp: "打開", vn: "đột phá, phá vỡ bế tắc", example: "状況を打開する" },
  { tag: "vocab", jp: "如実に", vn: "một cách rõ ràng, chân thực", example: "結果に如実に表れる" },
  { tag: "grammar", jp: "〜に至って", vn: "đến mức, đến giai đoạn", example: "事態は深刻化するに至った" },
  { tag: "grammar", jp: "〜を余儀なくされる", vn: "bị buộc phải", example: "計画の変更を余儀なくされた" },
];

const state = {
  index: 0,
  filter: "all",
  answered: Number(localStorage.getItem("n1Answered") || 0),
  correct: Number(localStorage.getItem("n1Correct") || 0),
  streak: Number(localStorage.getItem("n1Streak") || 0),
  selectedByPrompt: JSON.parse(localStorage.getItem("n1Selections") || "{}"),
};

const questionType = document.querySelector("#questionType");
const questionText = document.querySelector("#questionText");
const questionCount = document.querySelector("#questionCount");
const passage = document.querySelector("#passage");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextQuestion");
const prevButton = document.querySelector("#prevQuestion");
const filters = document.querySelectorAll(".filter");
const deckGrid = document.querySelector("#deckGrid");

function activeQuestions() {
  return state.filter === "all" ? questions : questions.filter((item) => item.type === state.filter);
}

function saveProgress() {
  localStorage.setItem("n1Answered", String(state.answered));
  localStorage.setItem("n1Correct", String(state.correct));
  localStorage.setItem("n1Streak", String(state.streak));
  localStorage.setItem("n1Selections", JSON.stringify(state.selectedByPrompt));
}

function updateMetrics() {
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  document.querySelector("#accuracyMetric").textContent = `${accuracy}%`;
  document.querySelector("#answeredMetric").textContent = state.answered;
  document.querySelector("#streakMetric").textContent = state.streak;
}

function renderQuestion() {
  const list = activeQuestions();
  const current = list[state.index];
  questionType.textContent = current.label;
  questionText.textContent = current.prompt;
  questionCount.textContent = `${state.index + 1}/${list.length}`;

  if (current.passage) {
    passage.hidden = false;
    passage.textContent = current.passage;
  } else {
    passage.hidden = true;
    passage.textContent = "";
  }

  answers.innerHTML = "";
  feedback.hidden = true;
  feedback.textContent = "";

  current.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseAnswer(current, optionIndex));
    answers.appendChild(button);
  });

  const selected = state.selectedByPrompt[current.prompt];
  if (selected !== undefined) {
    revealAnswer(current, selected, false);
  }
}

function chooseAnswer(question, optionIndex) {
  if (state.selectedByPrompt[question.prompt] !== undefined) {
    revealAnswer(question, optionIndex, false);
    return;
  }

  state.selectedByPrompt[question.prompt] = optionIndex;
  state.answered += 1;

  if (optionIndex === question.answer) {
    state.correct += 1;
    state.streak += 1;
  } else {
    state.streak = 0;
  }

  saveProgress();
  updateMetrics();
  revealAnswer(question, optionIndex, true);
}

function revealAnswer(question, selectedIndex) {
  [...answers.children].forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === question.answer) button.classList.add("correct");
    if (optionIndex === selectedIndex && optionIndex !== question.answer) button.classList.add("wrong");
  });

  feedback.hidden = false;
  feedback.textContent = question.explanation;
}

function moveQuestion(direction) {
  const list = activeQuestions();
  state.index = (state.index + direction + list.length) % list.length;
  renderQuestion();
}

function renderDeck() {
  deckGrid.innerHTML = "";
  cards.forEach((card) => {
    const item = document.createElement("button");
    item.className = "flashcard";
    item.type = "button";
    item.innerHTML = `
      <span class="tag">${card.tag}</span>
      <div class="jp">${card.jp}</div>
      <div class="meaning">${card.vn}<br><strong>${card.example}</strong></div>
    `;
    item.addEventListener("click", () => item.classList.toggle("is-open"));
    deckGrid.appendChild(item);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    state.index = 0;
    renderQuestion();
  });
});

nextButton.addEventListener("click", () => moveQuestion(1));
prevButton.addEventListener("click", () => moveQuestion(-1));

document.querySelector("#resetProgress").addEventListener("click", () => {
  state.answered = 0;
  state.correct = 0;
  state.streak = 0;
  state.selectedByPrompt = {};
  saveProgress();
  updateMetrics();
  renderQuestion();
});

renderDeck();
renderQuestion();
updateMetrics();

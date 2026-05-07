const questions = [];

function q(type, label, prompt, options, answer, explanation, passageText = "") {
  return {
    type,
    label,
    prompt,
    options,
    answer,
    explanation,
    passage: passageText,
    folder: type.startsWith("exam-") ? type : "",
    skill: skillFromLabel(label),
  };
}

function skillFromLabel(label) {
  if (label.includes("Từ vựng")) return "vocab";
  if (label.includes("Ngữ pháp")) return "grammar";
  if (label.includes("Đọc hiểu")) return "reading";
  return "";
}

const exam202412Questions = [
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "1. 佐藤選手がゴールを決めたとき、観客は絶叫した。読み方は？", ["せっきょう", "ぜっきょう", "ぜっきゅう", "せっきゅう"], 1, "絶叫 = ぜっきょう, hét lớn."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "2. 背後から物音が聞こえた。読み方は？", ["はいご", "はいこう", "せいご", "せいこう"], 0, "背後 = はいご, phía sau."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "3. 将来の抱負を述べる。読み方は？", ["ほうふ", "ほうぶ", "ほふ", "ほぶ"], 0, "抱負 = ほうふ, hoài bão."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "4. 人を侮ってはいけない。読み方は？", ["からかって", "ののしって", "あなどって", "うらぎって"], 2, "侮る = あなどる, coi thường."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "5. 相手がわかるように、筋道を立てて説明した。読み方は？", ["きんどう", "すじどう", "きんみち", "すじみち"], 3, "筋道 = すじみち, trình tự logic."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "6. その小説の主人公は、奔放な性格をしている。読み方は？", ["はんぼう", "ぼんぼう", "ほんぽう", "ばんぼう"], 2, "奔放 = ほんぽう, phóng khoáng."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "7. その生物は、厳しい環境に（　）できる能力を持っている。", ["適応", "合致", "転換", "推移"], 0, "環境に適応する = thích nghi với môi trường."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "8. 店の売り上げを五年で二倍にするという目標を（　）、みんなで努力している。", ["企てて", "興して", "築いて", "掲げて"], 3, "目標を掲げる = đề ra mục tiêu."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "9. 新しい市長は前市長の政策を（　）し、駅前の開発を進めると述べた。", ["相続", "獲得", "踏襲", "伝承"], 2, "政策を踏襲する = kế thừa chính sách."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "10. 台風で電車の到着が大幅に遅れたため、駅でしばらく（　）された。", ["息抜き", "棚上げ", "待ち伏せ", "足止め"], 3, "足止めされる = bị kẹt lại, không đi tiếp được."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "11. 今日は試合で一日中走り続けたので、疲れて（　）になった。", ["めちゃめちゃ", "へとへと", "どろどろ", "ぐちゃぐちゃ"], 1, "へとへと = kiệt sức."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "12. 工場の誘致について、市長が丁寧に説明し、住民の不安の（　）に努めた。", ["払拭", "喪失", "破棄", "排斥"], 0, "不安を払拭する = xua tan lo lắng."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "13. 階段でつまずいて転びそうになったので、（　）隣にいた友人の腕をつかんだ。", ["じきに", "いまに", "とっさに", "とっくに"], 0, "参照答案は1。PDFの語形は要確認。"),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "14. 社長は小林部長の手腕を高く評価しているようだ。意味が近いものは？", ["経験", "能力", "考え", "人柄"], 1, "手腕 = năng lực, khả năng xử lý."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "15. 時間をロスしてしまった。意味が近いものは？", ["間違えて", "無駄にして", "かいて", "延長して"], 1, "ロスする = lãng phí, mất mát."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "16. 確認がおろそかになっていた。意味が近いものは？", ["めんどうく", "困難に", "遅く", "いいかげん"], 3, "おろそか = qua loa, không cẩn thận."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "17. 私たちのチームの目下の目標は、市の大会で優勝することだ。意味が近いものは？", ["最大", "将来", "今", "最低限"], 2, "目下 = hiện tại, trước mắt."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "18. 古いアパートの改修工事を請け負うことにした。意味が近いものは？", ["引き受ける", "申し込む", "断る", "諦める"], 0, "請け負う = nhận làm, đảm nhận."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "19. 先生に本を進呈しました。意味が近いものは？", ["差し上げました", "いただきました", "お貸ししました", "お借りしました"], 0, "進呈する = kính tặng."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "20. 「加工」の使い方として最もよいものは？", ["生活習慣に加工する", "木材を加工した商品", "民宿に加工した", "就職規則を加工する"], 1, "木材を加工する = gia công gỗ."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "21. 「養う」の使い方として最もよいものは？", ["虫を養う", "植物を養う", "会社を養う", "子どもを養う"], 3, "子どもを養う = nuôi con."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "22. 「資質」の使い方として最もよいものは？", ["カメラの資質", "動物の資質", "製品の資質", "選手としての資質"], 3, "資質 = tố chất, phẩm chất."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "23. 「正当」の使い方として最もよいものは？", ["正当な組み立て", "正当な名前", "正当な評価", "正当に進む"], 2, "正当な評価 = đánh giá chính đáng."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "24. 「ありきたり」の使い方として最もよいものは？", ["コンビニがありきたり", "ストーリーがありきたり", "ありきたりのこと", "ありきたりの方"], 1, "ありきたり = tầm thường, không mới."),
  q("exam-2024-12", "2024 tháng 12 - Từ vựng", "25. 「間柄」の使い方として最もよいものは？", ["親しい間柄ではない", "両国の間柄が進展", "環境破壊との間柄", "海と間柄の深い暮らし"], 0, "間柄 = quan hệ giữa người/người hoặc bên/bên."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "26. どうせ当たらないんだから、買う（　）無駄だったよ。", ["より", "のみ", "には", "だけ"], 3, "買うだけ無駄 = mua cũng chỉ vô ích."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "27. 近年の健康意識の高まり（　）健康食品は急成長している。", ["に次いで", "にわたって", "を受けて", "をめぐって"], 2, "〜を受けて = chịu tác động/từ bối cảnh."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "28. 息子はサッカーの練習で疲れていたのか、家に（　）食事もとらず、寝てしまった。", ["帰り次第", "帰るなり", "帰ったなり", "帰るとなれば"], 1, "Vるなり = vừa ... là ngay."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "29. 第三者が不正にアクセスされる（　）、やむを得ない。", ["しかない以上", "しかない反面", "恐れがある以上", "恐れがある反面"], 2, "恐れがある以上 = vì có nguy cơ nên..."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "30. 昨日行った美術館は、一日では（　）作品が展示されていた。", ["見きれないほどの", "見ずにはいられないほどの", "見きれないといった", "見ずにはいられないといった"], 0, "見きれないほどの = nhiều đến mức không xem hết."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "31. 引っ越しを控えているので、余計な出費を（　）、旅行に行くことにした。", ["押さえたら押えたで", "抑えられるものなら", "抑えるには抑えずに", "抑えたいところだが"], 3, "〜たいところだが = muốn... nhưng."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "32. その小学生は、高校レベルの数学の問題をすらすらと（　）。", ["解けるとは", "解けるものなら", "解いたまでだ", "解いてみせた"], 0, "驚いたことに + とは = thật bất ngờ là..."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "33. 専門家の話では、かつてこの地域一帯は海だった（　）。", ["という", "といえる", "といった", "といわれる"], 0, "話では〜という = theo lời thì..."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "34. 親の経済状況によって、子どもの教育機会が奪われること（　）。", ["があるわけではない", "であるわけではない", "があってはならない", "であってはならない"], 2, "〜があってはならない = không được phép xảy ra."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "35. 青木「やりたいです。でも、私（　）」先生「もちろん」", ["だったらいいんですか", "なんかでいいんですか", "だったらいいんでしょう", "なんかでいいんでしょうか"], 1, "私なんかでいいんですか = người như em có được không ạ?"),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "36. 昨日はとても寒く、＿＿＿ ＿＿＿ ★ ＿＿＿ずっと雪が降っていた。★に入る語は？", ["が", "こそ", "積もらなかった", "午前中"], 0, "参照答案: 1."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "37. この映画はあまりにも正直で＿＿＿ ＿＿＿ ★ ＿＿＿、コメディー作品だ。★に入る語は？", ["真面目すぎる", "周りの人々とのトラブルが絶えない", "がゆえに", "男の日常を描いた"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "38. ＿＿＿ ＿＿＿ ★ ＿＿＿読みやすいように、ビジネス理論を漫画で解説したものが多い。★に入る語は？", ["堅苦しいものと思われがちだが", "抵抗がある人にも", "一般的にビジネス書というと", "ビジネス書に"], 3, "参照答案: 4."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "39. 渋滞の中を＿＿＿ ＿＿＿ ★ ＿＿＿遊園地に入る前から疲れてしまった。★に入る語は？", ["今度は", "3時間運転して", "駐車場が混雑していて", "ようやくついたと思ったら"], 0, "参照答案: 1."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp", "40. 商品やサービスが＿＿＿ ＿＿＿ ★ ＿＿＿ない。★に入る語は？", ["売れるも売れないも", "その存在が", "知られないことには", "どんなに良い物でも"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp đoạn văn", "41. 文中の（41）に入る最もよいものは？", ["気を使えばしない", "気を使ってなどいない", "気を使わせられはしない", "気を使わせてなどいない"], 2, "参照答案: 3.", "寂しい片耳。落としたピアスをめぐる随筆。編集者たちへの動揺、落ち込み、失敗への思いが述べられる。"),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp đoạn văn", "42. 文中の（42）に入る最もよいものは？", ["それによって", "そればかりでなく", "それどころか", "それにもかかわらず"], 3, "参照答案: 4.", "同じ文章。三、四年ぶりの落とし物であり、自分でも珍しいほど落ち込んだという流れ。"),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp đoạn văn", "43. 文中の（43）に入る最もよいものは？", ["承知していれば", "承知していて", "承知していたのか", "承知していたかのように"], 0, "参照答案: 1.", "自分の迂闊さを承知していれば、という文脈。"),
  q("exam-2024-12", "2024 tháng 12 - Ngữ pháp đoạn văn", "44. 文中の（44）に入る最もよいものは？", ["なら", "だって", "でさえ", "といっても"], 1, "参照答案: 2.", "ピアスでさえ/だって、最近たまたま落とさない日々が続いていただけ、という文脈。"),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "45. 筆者によると、「情報通」とはどのような人か。", ["幅広い分野で人並み以上の情報をもっている人。", "何が自分にとって必要な情報かをよく理解している人。", "誰が必要な情報をもっているかをよく把握している人。", "情報をもっている人を見つけて、問題解決ができる人。"], 2, "参照答案: 3.", "『情報通』とは、多くの場合、情報そのものではなく情報に通じた人を知っている人だという短文。"),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "46. 手の感覚について、実験からどのようなことが分かったか。", ["熱いお湯や冷たい水につけ続けていると、温度が感じられなくなる。", "同じぬるま湯でも、直前の経験により感じ方が変わる。", "冷たい水に慣れると熱いお湯もぬるく感じる。", "手の感覚は左右で常に違う意味を受け取る。"], 3, "参照答案: 4。選択肢文はPDFから要精査。", "冷水・熱湯・ぬるま湯を使う有名な感覚実験についての短文。"),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "47. 読解短文（1）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 0, "参照答案: 1. PDFの長文選択肢は今後精査予定。"),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "48. 読解短文（2）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2. PDFの長文選択肢は今後精査予定。"),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "49. 読解中文（1）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 3, "参照答案: 4."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "50. 読解中文（1）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "51. 読解中文（2）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "52. 読解中文（2）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 3, "参照答案: 4."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "53. 読解中文（3）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "54. 読解中文（3）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "55. 読解中文（4）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "56. 読解中文（4）の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 0, "参照答案: 1."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "57. 読解長文の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "58. 読解長文の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "59. 読解長文の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 0, "参照答案: 1."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "60. 統合理解 A/B の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 3, "参照答案: 4."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "61. 統合理解 A/B の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "62. 主張理解の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 1, "参照答案: 2."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "63. 主張理解の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 2, "参照答案: 3."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "64. 主張理解の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 3, "参照答案: 4."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "65. 情報検索の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 0, "参照答案: 1."),
  q("exam-2024-12", "2024 tháng 12 - Đọc hiểu", "66. 情報検索の問い。", ["選択肢1", "選択肢2", "選択肢3", "選択肢4"], 0, "参照答案: 1."),
];

const remoteExams = [
  { code: "202407", id: "exam-2024-07", title: "2024 tháng 7" },
  { code: "202312", id: "exam-2023-12", title: "2023 tháng 12" },
  { code: "202307", id: "exam-2023-07", title: "2023 tháng 7" },
];

const examFolders = [
  { id: "exam-2025-07", title: "2025 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2024-12", title: "2024 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2024-07", title: "2024 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2023-12", title: "2023 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2023-07", title: "2023 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
];

questions.push(...exam202412Questions);

const state = {
  index: 0,
  filter: "all",
  answered: Number(localStorage.getItem("n1Answered") || 0),
  correct: Number(localStorage.getItem("n1Correct") || 0),
  streak: Number(localStorage.getItem("n1Streak") || 0),
  selectedByPrompt: JSON.parse(localStorage.getItem("n1Selections") || "{}"),
  loading: true,
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

function labelFor(title, questionNumber) {
  if (questionNumber <= 25) return `${title} - Từ vựng`;
  if (questionNumber <= 40) return `${title} - Ngữ pháp`;
  if (questionNumber <= 44) return `${title} - Ngữ pháp đoạn văn`;
  return `${title} - Đọc hiểu`;
}

function convertRemoteExam(exam, data) {
  const converted = [];
  data.sections.forEach((section) => {
    section.groups.forEach((group) => {
      group.questions.forEach((item) => {
        const questionNumber = Number(item.questionNumber);
        converted.push(q(
          exam.id,
          labelFor(exam.title, questionNumber),
          `${questionNumber}. ${item.text}`,
          item.options,
          Number(item.correctAnswer) - 1,
          `Đáp án tham khảo: ${item.correctAnswer}.`,
          questionNumber >= 41 ? group.passage || "" : ""
        ));
      });
    });
  });
  return converted;
}

async function loadRemoteExams() {
  const remoteLoaded = await Promise.allSettled(remoteExams.map(async (exam) => {
    const response = await fetch(`https://www.jlptpracticetest.com/api/test/n1/${exam.code}`);
    if (!response.ok) throw new Error(`Không tải được đề ${exam.title}`);
    const data = await response.json();
    return convertRemoteExam(exam, data);
  }));
  questions.push(...remoteLoaded.filter((item) => item.status === "fulfilled").flatMap((item) => item.value));

  try {
    questions.push(...await loadLocal2025Exam());
  } catch (error) {
    console.warn(error);
  }
}

async function loadLocal2025Exam() {
  const response = await fetch("script-2025-07-66-fix40.js?v=1");
  if (!response.ok) throw new Error("Không tải được đề 2025 tháng 7");
  const source = await response.text();
  const match = source.match(/const exam202507Questions = \[([\s\S]*?)\n\];/);
  if (!match) throw new Error("Không đọc được dữ liệu đề 2025 tháng 7");
  const loaded = Function("q", `return [${match[1]}];`)(q);
  patch2025Answers(loaded);
  return loaded;
}

function patch2025Answers(list) {
  const byNumber = (number) => list.find((item) => item.prompt.startsWith(`${number}.`));
  const q35 = byNumber(35);
  if (q35) {
    q35.answer = 2;
    q35.explanation = "責任を取らずに済むわけがない = không thể nào thoát khỏi việc chịu trách nhiệm.";
  }

  const q36 = byNumber(36);
  if (q36) {
    q36.prompt = "36. 高級車には憧れるが、私の給料では、宝くじに＿＿＿ ★ ＿＿＿ ＿＿＿一生買えそうにない。★に入る語は？";
    q36.answer = 1;
    q36.explanation = "正しい順序: 当たり / でも / しない / 限り. ★は2番目なので「でも」。";
  }

  const q46 = byNumber(46);
  if (q46) {
    q46.answer = 3;
    q46.explanation = "病気の本体は見えにくいので、特徴的な症状を手がかりに根本原因を見つけ出すべきだという内容です.";
  }

  const q54 = byNumber(54);
  if (q54) {
    q54.answer = 0;
    q54.explanation = "主観的判断に委ねられるものは、チーム一人一人の意見を尊重するという内容です.";
  }

  const q62 = byNumber(62);
  if (q62) {
    q62.answer = 0;
    q62.explanation = "勝負に至るまでの苦悩を抱えつつ、戦いに臨んでいる棋士に魅力があるという内容です.";
  }
}

function activeQuestions() {
  if (state.filter === "all") return [];
  if (state.filter.startsWith("exam-")) return questions.filter((item) => item.type === state.filter);
  const folderQuestions = questions.filter((item) => item.folder);
  return folderQuestions.filter((item) => item.skill === state.filter);
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
  if (state.filter === "all") {
    renderFolderDirectory();
    return;
  }

  prevButton.hidden = false;
  nextButton.hidden = false;
  prevButton.style.display = "";
  nextButton.style.display = "";
  const list = activeQuestions();
  if (!list.length) {
    questionType.textContent = state.loading ? "Đang tải" : "Chưa có câu hỏi";
    questionText.textContent = state.loading ? "Đang tải dữ liệu đề..." : "Chưa có câu hỏi trong mục này.";
    questionCount.textContent = "0/0";
    passage.hidden = true;
    answers.innerHTML = "";
    feedback.hidden = true;
    return;
  }

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
  if (selected !== undefined) revealAnswer(current, selected);
}

function renderFolderDirectory() {
  prevButton.hidden = true;
  nextButton.hidden = true;
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  questionType.textContent = "Thư mục đề";
  questionText.textContent = state.loading ? "Đang tải thêm thư mục đề..." : "Chọn thư mục để luyện đề";
  questionCount.textContent = `${examFolders.length} thư mục`;
  passage.hidden = true;
  passage.textContent = "";
  feedback.hidden = false;
  feedback.textContent = "Các tab Từ vựng, Ngữ pháp và Đọc hiểu sẽ tự gom câu từ tất cả thư mục đề.";
  answers.innerHTML = "";

  examFolders.forEach((folder) => {
    const count = questions.filter((item) => item.folder === folder.id).length;
    const button = document.createElement("button");
    button.className = "answer folder-card";
    button.type = "button";
    button.innerHTML = `<strong>${folder.title}</strong><span>${folder.subtitle}</span><em>${count} câu</em>`;
    button.addEventListener("click", () => setFilter(folder.id));
    answers.appendChild(button);
  });
}

function chooseAnswer(question, optionIndex) {
  if (state.selectedByPrompt[question.prompt] !== undefined) {
    revealAnswer(question, optionIndex);
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
  revealAnswer(question, optionIndex);
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
  if (!list.length) return;
  state.index = (state.index + direction + list.length) % list.length;
  renderQuestion();
}

function folderTitle(folderId) {
  const folder = examFolders.find((item) => item.id === folderId);
  return folder ? folder.title : "Đề JLPT";
}

function flashcardsFromFolders() {
  return questions
    .filter((question) => question.folder && question.skill === "vocab")
    .map((question) => ({
      tag: folderTitle(question.folder),
      jp: question.options[question.answer],
      vn: question.prompt.replace(/^\d+\.\s*/, ""),
      example: question.explanation,
    }));
}

function renderDeck() {
  deckGrid.innerHTML = "";
  flashcardsFromFolders().forEach((card) => {
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
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

function setFilter(filter) {
  filters.forEach((item) => item.classList.toggle("active", item.dataset.filter === filter));
  state.filter = filter;
  state.index = 0;
  renderQuestion();
}

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

renderQuestion();
renderDeck();
updateMetrics();

loadRemoteExams()
  .then(() => {
    state.loading = false;
    renderQuestion();
    renderDeck();
  })
  .catch((error) => {
    state.loading = false;
    feedback.hidden = false;
    feedback.textContent = error.message;
    renderQuestion();
    renderDeck();
  });

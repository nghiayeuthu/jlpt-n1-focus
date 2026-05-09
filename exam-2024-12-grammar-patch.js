// Patch deployed data so 2024/12 grammar questions 41-44 show the full passage.
(function () {
  const passage = "寂しい片耳\n澤田瞳子\n\n久しぶりに少し、落ち込んでいる。お気に入りのピアスを片方、落としてしまったからだ。これが一人で行動している昼間なら、諦めがつくまで探しに戻るが、生憎、紛失に気付いたのは夜。それも編集者の方々に丸一日取材にご同行いただいた末、お疲れさまと入った店であった。\n\nようやく一息ついてらっしゃる編集者さんたちに、（41）。動揺を押し殺してさりげなく周りを見回し、やっぱりない、と片耳に触れるのが精いっぱい。朝からほうぼう歩き回った後のため、探しに行くのはどう考えても不可能で、そのまますごすごと家に引き上げた。\n\n親しいお店で作っていただいたピアスなので、片方だけ発注する（注1）のは難しくない。（42）自分でも珍しいほど落ち込んだのは、それが三、四年ぶりの落とし物だったからだ。\n\nピアスホールを開けて間がない二十代の頃は、着用に慣れていなかったため、二、三か月に一度は必ずピアスを落とした。三十代からは徐々にそれが間遠になり、この数年はとんと失敗をしていない。\n\n最初から自分の迂闊さを（43）、何を落とそうともがっかりはしない。もはやそんなことはあるまいと高を括っていた（注2）だけに、傲慢な自分がなおさら情けなくなる。顧みれば逆上がりも九九も苦手だった子供の頃は、「できないこと」をたくさん抱えているのが当然で、どんなミスをしても平気だった。大人になればなるほど、失敗が怖く、人の眼が気になってきたのは、知らず知らずのうちに自分が「できる」人間と考えるに至ったからかもしれない。\n\nだがそもそも、年を重ねたから失敗をしないというのは、幻想だ。ピアス（44）、最近たまたま落とさない日々が続いていただけで、明日からは毎日紛失を重ねるかもしれない。いや、自分のうっかり工合（注3）を考えれば、むしろその方が自然だと自分に言い聞かせながら、私はまだピアスの消えた片耳を撫で続けている。\n\n（注1）発注する：注文する\n（注2）高を括っていた：油断していた\n（注3）工合：具合";

  function questionNumber(question) {
    const match = (question.prompt || '').match(/^(\d+)\./);
    return match ? Number(match[1]) : 0;
  }

  function applyGrammarPassagePatch() {
    if (typeof questions === 'undefined' || !Array.isArray(questions)) return;
    questions.forEach((question) => {
      const number = questionNumber(question);
      if (question.type === 'exam-2024-12' && number >= 41 && number <= 44) {
        question.passage = passage;
      }
    });
    if (typeof renderQuestion === 'function') renderQuestion();
  }

  applyGrammarPassagePatch();
  document.addEventListener('DOMContentLoaded', applyGrammarPassagePatch);
  window.addEventListener('load', () => {
    applyGrammarPassagePatch();
    setTimeout(applyGrammarPassagePatch, 300);
  });
})();

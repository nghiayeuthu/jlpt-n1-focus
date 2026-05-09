const questions = [];

function q(type, label, prompt, options, answer, explanation, passageText = "", htmlPrompt = "") {
  return {
    type,
    label,
    prompt,
    htmlPrompt,
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
  { path: "exam-202407.json", id: "exam-2024-07", title: "2024 tháng 7" },
  { path: "exam-202312.json", id: "exam-2023-12", title: "2023 tháng 12" },
  { path: "exam-202307.json", id: "exam-2023-07", title: "2023 tháng 7" },
  { path: "exam-202212.json", id: "exam-2022-12", title: "2022 tháng 12" },
  { path: "exam-202207.json", id: "exam-2022-07", title: "2022 tháng 7" },
  { path: "exam-202112.json", id: "exam-2021-12", title: "2021 tháng 12" },
  { path: "exam-202107.json", id: "exam-2021-07", title: "2021 tháng 7" },
  { path: "exam-202012.json", id: "exam-2020-12", title: "2020 tháng 12" },
  { path: "exam-201912.json", id: "exam-2019-12", title: "2019 tháng 12" },
  { path: "exam-201907.json", id: "exam-2019-07", title: "2019 tháng 7" },
  { path: "exam-201812.json", id: "exam-2018-12", title: "2018 tháng 12" },
  { path: "exam-201807.json", id: "exam-2018-07", title: "2018 tháng 7" },
  { path: "exam-201712.json", id: "exam-2017-12", title: "2017 tháng 12" },
  { path: "exam-201707.json", id: "exam-2017-07", title: "2017 tháng 7" },
  { path: "exam-201612.json", id: "exam-2016-12", title: "2016 tháng 12" },
  { path: "exam-201607.json", id: "exam-2016-07", title: "2016 tháng 7" },
  { path: "exam-201512.json", id: "exam-2015-12", title: "2015 tháng 12" },
  { path: "exam-201507.json", id: "exam-2015-07", title: "2015 tháng 7" },
  { path: "exam-201412.json", id: "exam-2014-12", title: "2014 tháng 12" },
  { path: "exam-201407.json", id: "exam-2014-07", title: "2014 tháng 7" },
  { path: "exam-201312.json", id: "exam-2013-12", title: "2013 tháng 12" },
  { path: "exam-201307.json", id: "exam-2013-07", title: "2013 tháng 7" },
  { path: "exam-201212.json", id: "exam-2012-12", title: "2012 tháng 12" },
  { path: "exam-201207.json", id: "exam-2012-07", title: "2012 tháng 7" },
  { path: "exam-201112.json", id: "exam-2011-12", title: "2011 tháng 12" },
  { path: "exam-201107.json", id: "exam-2011-07", title: "2011 tháng 7" },
  { path: "exam-201012.json", id: "exam-2010-12", title: "2010 tháng 12" },
];

const examFolders = [
  { id: "exam-2025-07", title: "2025 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2024-12", title: "2024 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2024-07", title: "2024 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2023-12", title: "2023 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2023-07", title: "2023 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2022-12", title: "2022 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2022-07", title: "2022 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2021-12", title: "2021 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2021-07", title: "2021 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2020-12", title: "2020 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2019-12", title: "2019 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2019-07", title: "2019 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2018-12", title: "2018 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2018-07", title: "2018 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2017-12", title: "2017 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2017-07", title: "2017 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2016-12", title: "2016 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2016-07", title: "2016 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2015-12", title: "2015 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2015-07", title: "2015 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2014-12", title: "2014 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2014-07", title: "2014 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2013-12", title: "2013 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2013-07", title: "2013 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2012-12", title: "2012 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2012-07", title: "2012 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2011-12", title: "2011 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2011-07", title: "2011 tháng 7", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
  { id: "exam-2010-12", title: "2010 tháng 12", subtitle: "Đề JLPT N1 - 文字・語彙, 文法, 読解" },
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
  deckType: "vocab",
  deckIndex: 0,
  deckOpen: false,
};

const questionType = document.querySelector("#questionType");
const questionText = document.querySelector("#questionText");
const questionCount = document.querySelector("#questionCount");
const passage = document.querySelector("#passage");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const questionJump = document.querySelector("#questionJump");
const nextButton = document.querySelector("#nextQuestion");
const prevButton = document.querySelector("#prevQuestion");
const filters = document.querySelectorAll(".filter");
const deckGrid = document.querySelector("#deckGrid");
const quizShell = document.querySelector(".quiz-shell");

const kanjiTargets = {
  "exam-2025-07": ["余暇", "鈍い", "検閲", "崇高", "裁く", "胸中"],
  "exam-2024-12": ["絶叫", "背後", "抱負", "侮って", "筋道", "奔放"],
  "exam-2024-07": ["腐敗", "粗い", "粘膜", "寿命", "戒める", "誓約書"],
  "exam-2023-12": ["軌跡", "偏り", "矛盾", "誇張", "賄って", "軽率"],
  "exam-2023-07": ["騒然", "諭した", "秩序", "潜伏", "朗らかな", "振興"],
};

const n1Vocabulary = [
  ["絶叫", "ぜっきょう", "hét lớn, la thất thanh"],
  ["背後", "はいご", "phía sau, hậu cảnh"],
  ["抱負", "ほうふ", "hoài bão, chí hướng"],
  ["侮る", "あなどる", "coi thường, xem nhẹ"],
  ["筋道", "すじみち", "trình tự logic, mạch lý lẽ"],
  ["奔放", "ほんぽう", "phóng khoáng, không gò bó"],
  ["適応", "てきおう", "thích nghi"],
  ["掲げる", "かかげる", "đề ra, nêu lên"],
  ["踏襲", "とうしゅう", "kế thừa, noi theo"],
  ["足止め", "あしどめ", "bị giữ lại, bị kẹt không đi tiếp được"],
  ["払拭", "ふっしょく", "xua tan, quét sạch"],
  ["手腕", "しゅわん", "năng lực xử lý, tài xoay xở"],
  ["ロス", "ロス", "mất mát, lãng phí"],
  ["おろそか", "おろそか", "qua loa, lơ là"],
  ["目下", "もっか", "hiện tại, trước mắt"],
  ["請け負う", "うけおう", "nhận làm, đảm nhận"],
  ["進呈", "しんてい", "kính tặng, biếu"],
  ["加工", "かこう", "gia công, chế biến"],
  ["養う", "やしなう", "nuôi dưỡng"],
  ["資質", "ししつ", "tố chất, phẩm chất"],
  ["正当", "せいとう", "chính đáng, hợp lý"],
  ["ありきたり", "ありきたり", "tầm thường, thường thấy"],
  ["間柄", "あいだがら", "mối quan hệ"],
  ["腐敗", "ふはい", "mục nát, thối rữa; tham nhũng"],
  ["粗い", "あらい", "thô, sơ sài"],
  ["粘膜", "ねんまく", "niêm mạc"],
  ["寿命", "じゅみょう", "tuổi thọ"],
  ["戒める", "いましめる", "răn dạy, cảnh báo"],
  ["誓約書", "せいやくしょ", "bản cam kết"],
  ["軌跡", "きせき", "quỹ tích, dấu vết"],
  ["偏り", "かたより", "thiên lệch"],
  ["矛盾", "むじゅん", "mâu thuẫn"],
  ["誇張", "こちょう", "phóng đại"],
  ["賄う", "まかなう", "trang trải, cung cấp"],
  ["軽率", "けいそつ", "khinh suất"],
  ["騒然", "そうぜん", "náo động, ồn ào"],
  ["諭す", "さとす", "khuyên bảo, giảng giải"],
  ["秩序", "ちつじょ", "trật tự"],
  ["潜伏", "せんぷく", "ẩn náu, tiềm phục"],
  ["朗らか", "ほがらか", "vui vẻ, sáng sủa"],
  ["振興", "しんこう", "chấn hưng, thúc đẩy"],
  ["余暇", "よか", "thời gian rảnh"],
  ["鈍い", "にぶい", "chậm, cùn, kém nhạy"],
  ["検閲", "けんえつ", "kiểm duyệt"],
  ["崇高", "すうこう", "cao cả"],
  ["裁く", "さばく", "xét xử, phán xét"],
  ["胸中", "きょうちゅう", "trong lòng, tâm tư"],
  ["情報通", "じょうほうつう", "người thạo tin"],
  ["占有率", "せんゆうりつ", "tỷ lệ chiếm giữ/thị phần"],
  ["迂闊", "うかつ", "bất cẩn, sơ suất"],
  ["等身大", "とうしんだい", "đúng với con người thật, không phóng đại"],
  ["媒介", "ばいかい", "môi giới, trung gian"],
  ["補助", "ほじょ", "hỗ trợ, trợ cấp"],
  ["申請", "しんせい", "nộp đơn, xin"],
  ["書類", "しょるい", "giấy tờ, hồ sơ"],
  ["締め切り", "しめきり", "hạn chót"],
  ["提出", "ていしゅつ", "nộp, trình"],
  ["責任", "せきにん", "trách nhiệm"],
  ["資源", "しげん", "tài nguyên"],
  ["現状", "げんじょう", "hiện trạng"],
  ["講演", "こうえん", "bài diễn thuyết"],
  ["専門家", "せんもんか", "chuyên gia"],
  ["環境問題", "かんきょうもんだい", "vấn đề môi trường"],
  ["引き換え", "ひきかえ", "đổi lại, đánh đổi"],
  ["限りある", "かぎりある", "có giới hạn"],
  ["失われる", "うしなわれる", "bị mất đi"],
  ["考えさせられる", "かんがえさせられる", "khiến phải suy nghĩ"],
];

const n2Vocabulary = [
  ["把握", "はあく", "nắm bắt, hiểu rõ"],
  ["憤り", "いきどおり", "sự phẫn nộ, tức giận"],
  ["趣旨", "しゅし", "ý chính, mục đích chính"],
  ["日夜", "にちや", "ngày đêm"],
  ["励む", "はげむ", "nỗ lực, chuyên tâm"],
  ["貫く", "つらぬく", "giữ vững, xuyên suốt"],
  ["貧富", "ひんぷ", "giàu nghèo"],
  ["再発", "さいはつ", "tái phát, lặp lại"],
  ["防止", "ぼうし", "phòng tránh, ngăn chặn"],
  ["対策", "たいさく", "biện pháp đối phó"],
  ["培う", "つちかう", "vun đắp, bồi dưỡng"],
  ["築く", "きずく", "xây dựng"],
  ["練る", "ねる", "trau chuốt, lập kỹ"],
  ["磨く", "みがく", "mài giũa, rèn luyện"],
  ["とりわけ", "とりわけ", "đặc biệt là"],
  ["当時", "とうじ", "thời điểm đó"],
  ["転職", "てんしょく", "chuyển việc"],
  ["念頭", "ねんとう", "trong đầu, điều đang nghĩ tới"],
  ["念願", "ねんがん", "ước nguyện lâu nay"],
  ["内心", "ないしん", "trong lòng"],
  ["そわそわ", "そわそわ", "bồn chồn, đứng ngồi không yên"],
  ["人材", "じんざい", "nhân lực, người tài"],
  ["育成", "いくせい", "đào tạo, nuôi dưỡng"],
  ["担う", "になう", "đảm nhiệm, gánh vác"],
  ["披露", "ひろう", "trình diễn, công bố"],
  ["腕前", "うでまえ", "tay nghề, trình độ"],
  ["手間", "てま", "công sức, thời gian bỏ ra"],
  ["発言", "はつげん", "phát biểu"],
  ["議論", "ぎろん", "tranh luận"],
  ["ためらう", "ためらう", "do dự, ngập ngừng"],
  ["案じる", "あんじる", "lo lắng"],
  ["予測", "よそく", "dự đoán"],
  ["外れる", "はずれる", "trật, không đúng"],
  ["人込み", "ひとごみ", "đám đông"],
  ["渋滞", "じゅうたい", "tắc nghẽn"],
  ["暗やみ", "くらやみ", "bóng tối"],
  ["発生", "はっせい", "phát sinh, xảy ra"],
  ["仕組み", "しくみ", "cơ chế, cấu trúc"],
  ["記述", "きじゅつ", "mô tả, ghi chép"],
  ["内容", "ないよう", "nội dung"],
  ["確信", "かくしん", "niềm tin chắc chắn"],
  ["証拠", "しょうこ", "bằng chứng"],
  ["基準", "きじゅん", "tiêu chuẩn, căn cứ"],
  ["方法", "ほうほう", "phương pháp"],
  ["理由", "りゆう", "lý do"],
  ["急がせる", "いそがせる", "hối thúc"],
  ["待たせる", "またせる", "bắt chờ"],
  ["困らせる", "こまらせる", "làm khó xử, gây phiền"],
  ["処置", "しょち", "xử trí, biện pháp xử lý"],
  ["拍子", "ひょうし", "ngay lúc, khoảnh khắc; nhịp"],
  ["口出し", "くちだし", "xen vào, can thiệp bằng lời"],
  ["反論", "はんろん", "phản bác"],
  ["遠慮", "えんりょ", "ngại ngùng, giữ ý"],
  ["私生活", "しせいかつ", "đời sống riêng tư"],
  ["手続き", "てつづき", "thủ tục"],
  ["窓口", "まどぐち", "quầy tiếp nhận"],
  ["当てはめる", "あてはめる", "áp vào, áp dụng vào"],
  ["少数", "しょうすう", "số ít"],
  ["事例", "じれい", "trường hợp, ví dụ"],
  ["一般化", "いっぱんか", "khái quát hóa"],
  ["社会全体", "しゃかいぜんたい", "toàn xã hội"],
  ["習慣", "しゅうかん", "thói quen, tập quán"],
  ["取り入れる", "とりいれる", "đưa vào, áp dụng"],
  ["捜査", "そうさ", "điều tra"],
  ["怠る", "おこたる", "lơ là, bỏ bê"],
  ["危機的", "ききてき", "mang tính khủng hoảng"],
  ["根本的", "こんぽんてき", "căn bản, tận gốc"],
  ["見直し", "みなおし", "xem xét lại"],
  ["不可欠", "ふかけつ", "không thể thiếu"],
  ["状況", "じょうきょう", "tình hình, hoàn cảnh"],
  ["行動", "こうどう", "hành động"],
  ["視線", "しせん", "ánh nhìn, tầm mắt"],
  ["適切", "てきせつ", "phù hợp, thích đáng"],
  ["不適切", "ふてきせつ", "không phù hợp"],
  ["暗黙", "あんもく", "ngầm hiểu, không nói ra"],
  ["公共性", "こうきょうせい", "tính công cộng"],
  ["規範", "きはん", "quy phạm, chuẩn mực"],
  ["認識", "にんしき", "nhận thức"],
  ["導く", "みちびく", "dẫn dắt"],
  ["営み", "いとなみ", "hoạt động sống, sinh hoạt"],
  ["自然", "しぜん", "tự nhiên"],
  ["土地", "とち", "vùng đất, địa phương"],
  ["争う", "あらそう", "tranh giành, tranh chấp"],
  ["仲良く", "なかよく", "hòa thuận"],
  ["必要", "ひつよう", "cần thiết"],
  ["明確", "めいかく", "rõ ràng"],
  ["法律", "ほうりつ", "pháp luật"],
  ["制度", "せいど", "chế độ, hệ thống"],
  ["街角", "まちかど", "góc phố"],
  ["路上", "ろじょう", "trên đường"],
  ["共有", "きょうゆう", "chia sẻ, cùng có chung"],
  ["押し付ける", "おしつける", "áp đặt"],
  ["従う", "したがう", "tuân theo"],
  ["判断", "はんだん", "phán đoán, quyết định"],
  ["無意識", "むいしき", "vô thức"],
  ["眺める", "ながめる", "ngắm nhìn"],
  ["疑問", "ぎもん", "nghi vấn, thắc mắc"],
  ["次第に", "しだいに", "dần dần"],
  ["改めて", "あらためて", "một lần nữa, lại"],
  ["振る舞い", "ふるまい", "cách cư xử, hành vi"],
  ["許す", "ゆるす", "cho phép, tha thứ"],
  ["結果", "けっか", "kết quả"],
  ["取り決める", "とりきめる", "quy định, thỏa thuận"],
  ["繰り返す", "くりかえす", "lặp lại"],
  ["重要", "じゅうよう", "quan trọng"],
  ["施設", "しせつ", "cơ sở, thiết bị"],
  ["在学生", "ざいがくせい", "sinh viên đang học"],
  ["公認", "こうにん", "được công nhận chính thức"],
  ["団体", "だんたい", "đoàn thể, tổ chức"],
  ["営利目的", "えいりもくてき", "mục đích lợi nhuận"],
  ["利用", "りよう", "sử dụng"],
  ["可否", "かひ", "được hay không"],
  ["管理", "かんり", "quản lý"],
  ["委員会", "いいんかい", "ủy ban"],
  ["定員", "ていいん", "sức chứa, số người quy định"],
  ["備え付け", "そなえつけ", "trang bị sẵn"],
  ["借りる", "かりる", "mượn, thuê"],
  ["代表者", "だいひょうしゃ", "người đại diện"],
  ["設備", "せつび", "thiết bị, cơ sở vật chất"],
  ["詳細", "しょうさい", "chi tiết"],
  ["参照", "さんしょう", "tham khảo"],
  ["提出先", "ていしゅつさき", "nơi nộp"],
  ["期限", "きげん", "hạn, thời hạn"],
  ["参加者", "さんかしゃ", "người tham gia"],
  ["見込まれる", "みこまれる", "được dự tính, có khả năng"],
  ["開催", "かいさい", "tổ chức, mở sự kiện"],
  ["備品", "びひん", "trang thiết bị, vật dụng"],
  ["借用", "しゃくよう", "mượn, vay dùng"],
  ["希望", "きぼう", "mong muốn, nguyện vọng"],
  ["予定", "よてい", "dự định, kế hoạch"],
];

const sortedN1Vocabulary = [...n1Vocabulary].sort((a, b) => b[0].length - a[0].length);
const sortedN2Vocabulary = [...n2Vocabulary].sort((a, b) => b[0].length - a[0].length);
const sortedStudyVocabulary = [...n1Vocabulary, ...n2Vocabulary].sort((a, b) => b[0].length - a[0].length);

function labelFor(title, questionNumber) {
  if (questionNumber <= 25) return `${title} - Từ vựng`;
  if (questionNumber <= 40) return `${title} - Ngữ pháp`;
  if (questionNumber <= 44) return `${title} - Ngữ pháp đoạn văn`;
  return `${title} - Đọc hiểu`;
}

function n1EntriesForText(text, maxItems = 6) {
  const source = String(text || "");
  const found = [];
  sortedN1Vocabulary.forEach(([word, reading, meaning]) => {
    if (found.length >= maxItems) return;
    if (source.includes(word) && !found.some((item) => item.word === word)) {
      found.push({ word, reading, meaning });
    }
  });
  return found;
}

function highlightedTargetFromHtml(htmlPrompt) {
  if (!htmlPrompt) return "";
  const match = htmlPrompt.match(/<span class="kanji-target">([^<]+)<\/span>/);
  return match ? match[1] : "";
}

function n2EntriesForText(text, maxItems = 6) {
  const source = String(text || "");
  const found = [];
  sortedN2Vocabulary.forEach(([word, reading, meaning]) => {
    if (found.length >= maxItems) return;
    if (source.includes(word) && !found.some((item) => item.word === word)) {
      found.push({ word, reading, meaning });
    }
  });
  return found;
}

function fallbackN1EntryForQuestion(question) {
  const number = questionNumber(question);
  if (number < 1 || number > 25) return null;

  const target = question.targetWord || highlightedTargetFromHtml(question.htmlPrompt) || targetFromQuestionText(question);
  if (!target) return null;

  const known = studyEntriesForText(target, 1)[0];
  const correct = question.options[question.answer] || "";
  let reading = known?.reading || "";
  let meaning = known?.meaning || "";

  if (number <= 6) {
    reading = correct || reading;
    meaning = meaning || `cách đọc trong câu là ${correct}`;
  } else if (number <= 13) {
    reading = reading || target;
    meaning = meaning || `từ đúng trong ngữ cảnh là ${correct}`;
  } else if (number <= 19) {
    reading = reading || target;
    meaning = meaning || `gần nghĩa với ${correct}`;
  } else {
    reading = reading || target;
    meaning = meaning || `cách dùng đúng: ${correct}`;
  }

  return { word: target, reading, meaning };
}

function studyEntriesForText(text, maxItems = 1) {
  const source = String(text || "");
  const found = [];
  sortedStudyVocabulary.forEach(([word, reading, meaning]) => {
    if (found.length >= maxItems) return;
    if (source.includes(word) && !found.some((item) => item.word === word)) {
      found.push({ word, reading, meaning });
    }
  });
  return found;
}

function n1NotesForQuestion(item, group = null) {
  const textParts = [item.text, item.textHtml, item.passage, group?.passage, ...(item.options || [])];
  const entries = n1EntriesForText(textParts.join(" "), item.questionNumber >= 41 ? 6 : 4);
  if (!entries.length) return "";
  return `\nTừ N1 cần nhớ: ${entries.map((entry) => `${entry.word}（${entry.reading}）= ${entry.meaning}`).join("; ")}.`;
}

function n2NotesForQuestion(item, group = null) {
  const textParts = [item.text, item.textHtml, item.passage, group?.passage, ...(item.options || [])];
  const entries = n2EntriesForText(textParts.join(" "), item.questionNumber >= 41 ? 8 : 5);
  if (!entries.length) return "";
  return `\nTừ N2 cần nhớ: ${entries.map((entry) => `${entry.word}（${entry.reading}）= ${entry.meaning}`).join("; ")}.`;
}

function withStudyNotes(baseExplanation, item, group = null) {
  return `${baseExplanation}${n1NotesForQuestion(item, group)}${n2NotesForQuestion(item, group)}`;
}

function explanationForRemoteQuestion(exam, item, group) {
  const questionNumber = Number(item.questionNumber);
  const correctIndex = Number(item.correctAnswer) - 1;
  const correctText = item.options[correctIndex];
  const prompt = item.text.replace(/\[\[blank\]\]/g, "（　）");
  let base = "";

  if (questionNumber <= 6) {
    base = `Đáp án: ${item.correctAnswer}. Cách đọc đúng trong câu là 「${correctText}」. Đây là dạng kiểm tra âm đọc kanji, nên hãy gắn cách đọc với cả cụm trong đề: ${prompt}`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 13) {
    base = `Đáp án: ${item.correctAnswer}. Chỗ trống cần 「${correctText}」 để câu tự nhiên về nghĩa và cách kết hợp từ. Đặt vào câu sẽ thành: ${prompt.replace("（　）", `「${correctText}」`)}`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 19) {
    base = `Đáp án: ${item.correctAnswer}. Trong ngữ cảnh này, từ/cụm được hỏi gần nghĩa nhất với 「${correctText}」. Các lựa chọn còn lại lệch sắc thái hoặc không khớp với ý của câu.`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 25) {
    base = `Đáp án: ${item.correctAnswer}. Cách dùng đúng là câu có 「${correctText}」. Từ được hỏi phải đi với danh từ/động từ và tình huống tự nhiên như trong lựa chọn này; các câu khác dùng sai quan hệ nghĩa hoặc collocation.`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 35) {
    base = `Đáp án: ${item.correctAnswer}. Mẫu đúng là 「${correctText}」. Khi đặt vào câu, cấu trúc ngữ pháp và sắc thái câu sẽ khớp nhất: ${prompt.replace("（　）", `「${correctText}」`)}`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 40) {
    base = `Đáp án: ${item.correctAnswer}. Đây là bài sắp xếp câu có dấu ★. Hãy ghép các mảnh theo trật tự tự nhiên của tiếng Nhật, rồi lấy mảnh nằm ở vị trí ★; mảnh đúng là 「${correctText}」.`;
    return withStudyNotes(base, item, group);
  }

  if (questionNumber <= 44) {
    base = `Đáp án: ${item.correctAnswer}. Trong đoạn văn, chỗ này cần 「${correctText}」 để nối đúng mạch ý trước sau. Khi làm dạng này, ưu tiên quan hệ logic trong đoạn hơn là chỉ nhìn riêng một câu.`;
    return withStudyNotes(base, item, group);
  }

  base = `Đáp án: ${item.correctAnswer}. Theo nội dung đoạn đọc, lựa chọn đúng là 「${correctText}」. Đáp án này khớp trực tiếp với ý chính/chi tiết trong bài, còn các lựa chọn khác thường sai do nói quá, đổi chủ thể hoặc lệch điều kiện.`;
  return withStudyNotes(base, item, group);
}

function sourceMarkupToHtml(value) {
  return escapeHtml(value)
    .replace(/\[\[blank\]\]/g, "（　）")
    .replace(/\[\[br\]\]/g, "<br>")
    .replace(/\[\[u\]\]/g, '<span class="kanji-target">')
    .replace(/\[\[\/u\]\]/g, "</span>")
    .replace(/\[\[\/?b\]\]/g, "")
    .replace(/\[\[\/?center\]\]/g, "")
    .replace(/\[\[\/?h4\]\]/g, "");
}

function convertRemoteExam(exam, data) {
  const converted = [];
  data.sections.forEach((section) => {
    section.groups.forEach((group) => {
      group.questions.forEach((item) => {
        const questionNumber = Number(item.questionNumber);
        const promptText = item.text.replace(/\[\[blank\]\]/g, "（　）");
        const promptMarkup = item.textHtml ? `${questionNumber}. ${sourceMarkupToHtml(item.textHtml)}` : "";
        converted.push(q(
          exam.id,
          labelFor(exam.title, questionNumber),
          `${questionNumber}. ${promptText}`,
          item.options,
          Number(item.correctAnswer) - 1,
          explanationForRemoteQuestion(exam, item, group),
          questionNumber >= 41 ? group.passage || "" : "",
          promptMarkup
        ));
      });
    });
  });
  return converted;
}

function targetFromQuestionText(question) {
  const prompt = question.prompt || "";
  const quoted = prompt.match(/「([^」]+)」/);
  if (quoted) return quoted[1];

  const meaningPrompt = prompt.match(/^\d+\.\s*(.+?)。意味が近いものは？/);
  if (meaningPrompt) {
    const entries = studyEntriesForText(meaningPrompt[1], 1);
    if (entries.length) return entries[0].word;
  }

  const entries = studyEntriesForText(prompt, 1);
  return entries.length ? entries[0].word : "";
}

function hasHighlightedPrompt(question) {
  return Boolean(question.htmlPrompt && question.htmlPrompt.includes('class="kanji-target"'));
}

function addN1NotesToExplanation(question) {
  if (!question.explanation || question.explanation.includes("Từ N1 cần nhớ:")) return;
  const entries = n1EntriesForText(`${question.prompt} ${question.passage || ""} ${question.options.join(" ")}`, question.skill === "reading" ? 6 : 4);
  if (!entries.length) {
    const fallback = fallbackN1EntryForQuestion(question);
    if (fallback) entries.push(fallback);
  }
  if (!entries.length) return;
  question.explanation += `\nTừ N1 cần nhớ: ${entries.map((entry) => `${entry.word}（${entry.reading}）= ${entry.meaning}`).join("; ")}.`;
}

function addN2NotesToExplanation(question) {
  if (!question.explanation || question.explanation.includes("Từ N2 cần nhớ:")) return;
  const entries = n2EntriesForText(`${question.prompt} ${question.passage || ""} ${question.options.join(" ")}`, question.skill === "reading" ? 8 : 5);
  if (!entries.length) return;
  question.explanation += `\nTừ N2 cần nhớ: ${entries.map((entry) => `${entry.word}（${entry.reading}）= ${entry.meaning}`).join("; ")}.`;
}

function enhanceQuestion(question) {
  if (!hasHighlightedPrompt(question) && !question.targetWord) {
    const target = targetFromQuestionText(question);
    if (target && question.prompt.includes(target)) {
      question.targetWord = target;
    }
  }
  addN1NotesToExplanation(question);
  addN2NotesToExplanation(question);
  return question;
}

function enhanceQuestions(list) {
  list.forEach(enhanceQuestion);
}

async function loadRemoteExams() {
  const remoteLoaded = await Promise.allSettled(remoteExams.map(async (exam) => {
    const response = await fetch(`${exam.path}?v=1`);
    if (!response.ok) throw new Error(`Không tải được đề ${exam.title}`);
    const data = await response.json();
    return convertRemoteExam(exam, data);
  }));
  remoteLoaded.forEach((item) => {
    if (item.status === "fulfilled") {
      questions.push(...item.value);
    } else {
      console.warn(item.reason);
    }
  });

  try {
    questions.push(...await loadLocal2025Exam());
  } catch (error) {
    console.warn(error);
  }

  applyKanjiTargets(questions);
  enhanceQuestions(questions);
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

function questionNumber(question) {
  const match = question.prompt.match(/^(\d+)\./);
  return match ? Number(match[1]) : 0;
}

function applyKanjiTargets(list) {
  list.forEach((question) => {
    const number = questionNumber(question);
    const targets = kanjiTargets[question.folder];
    if (number >= 1 && number <= 6 && targets) {
      question.targetWord = targets[number - 1];
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function promptHtml(question) {
  if (question.htmlPrompt) return question.htmlPrompt;
  const prompt = escapeHtml(question.prompt);
  if (!question.targetWord) return prompt;

  const target = escapeHtml(question.targetWord);
  const index = prompt.indexOf(target);
  if (index === -1) return prompt;

  return `${prompt.slice(0, index)}<span class="kanji-target">${target}</span>${prompt.slice(index + target.length)}`;
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

function scrollQuestionIntoView() {
  if (!quizShell) return;
  requestAnimationFrame(() => {
    quizShell.scrollIntoView({ behavior: "smooth", block: "start" });
  });
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
    questionJump.hidden = true;
    questionJump.innerHTML = "";
    feedback.hidden = true;
    return;
  }

  const current = list[state.index];
  questionType.textContent = current.label;
  questionText.innerHTML = promptHtml(current);
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
  renderQuestionJump(list);
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
  questionJump.hidden = true;
  questionJump.innerHTML = "";
  feedback.hidden = false;
  feedback.textContent = "Các tab Từ vựng và Ngữ pháp sẽ tự gom câu từ tất cả thư mục đề. Đọc hiểu vẫn nằm trong từng thư mục đề.";
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

function renderQuestionJump(list) {
  if (!state.filter.startsWith("exam-")) {
    questionJump.hidden = true;
    questionJump.innerHTML = "";
    return;
  }

  questionJump.hidden = false;
  questionJump.innerHTML = "";

  const heading = document.createElement("div");
  heading.className = "question-jump-heading";
  heading.innerHTML = `<strong>Chọn câu</strong><span>${folderTitle(state.filter)} · ${list.length} câu</span>`;
  questionJump.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "question-jump-grid";

  list.forEach((question, questionIndex) => {
    const selected = state.selectedByPrompt[question.prompt];
    const button = document.createElement("button");
    button.className = "jump-button";
    button.type = "button";
    button.textContent = questionIndex + 1;
    button.setAttribute("aria-label", `Chuyển tới câu ${questionIndex + 1}`);
    button.classList.toggle("active", questionIndex === state.index);

    if (selected !== undefined) {
      button.classList.add(selected === question.answer ? "done-correct" : "done-wrong");
    }

    button.addEventListener("click", () => {
      state.index = questionIndex;
      renderQuestion();
      scrollQuestionIntoView();
    });

    grid.appendChild(button);
  });

  questionJump.appendChild(grid);
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
  renderQuestionJump(activeQuestions());
}

function moveQuestion(direction) {
  const list = activeQuestions();
  if (!list.length) return;
  state.index = (state.index + direction + list.length) % list.length;
  renderQuestion();
  scrollQuestionIntoView();
}

function folderTitle(folderId) {
  const folder = examFolders.find((item) => item.id === folderId);
  return folder ? folder.title : "Đề JLPT";
}

function flashcardsFromFolders(skill = state.deckType) {
  return questions
    .filter((question) => question.folder && question.skill === skill)
    .map((question) => ({
      tag: folderTitle(question.folder),
      jp: skill === "vocab" ? question.options[question.answer] : question.prompt.replace(/^\d+\.\s*/, ""),
      vn: question.prompt.replace(/^\d+\.\s*/, ""),
      example: question.explanation,
    }));
}

function renderDeck() {
  deckGrid.innerHTML = "";
  const cards = flashcardsFromFolders();
  if (state.deckIndex >= cards.length) state.deckIndex = 0;

  const shell = document.createElement("div");
  shell.className = "flashcard-shell";

  const tabs = document.createElement("div");
  tabs.className = "deck-tabs";
  [
    { type: "vocab", label: "Từ vựng" },
    { type: "grammar", label: "Ngữ pháp" },
  ].forEach((item) => {
    const button = document.createElement("button");
    button.className = "deck-tab";
    button.type = "button";
    button.textContent = item.label;
    button.classList.toggle("active", state.deckType === item.type);
    button.addEventListener("click", () => {
      state.deckType = item.type;
      state.deckIndex = 0;
      state.deckOpen = false;
      renderDeck();
    });
    tabs.appendChild(button);
  });
  shell.appendChild(tabs);

  if (!cards.length) {
    const empty = document.createElement("div");
    empty.className = "flashcard-empty";
    empty.textContent = state.loading ? "Đang tải flashcards..." : "Chưa có flashcard trong mục này.";
    shell.appendChild(empty);
    deckGrid.appendChild(shell);
    return;
  }

  const card = cards[state.deckIndex];
  const item = document.createElement("button");
  item.className = "flashcard single";
  item.type = "button";
  item.classList.toggle("is-open", state.deckOpen);
  item.innerHTML = `
    <span class="tag">${card.tag}</span>
    <div class="jp">${card.jp}</div>
    <div class="meaning">${card.vn}<br><strong>${card.example}</strong></div>
  `;
  item.addEventListener("click", () => {
    state.deckOpen = !state.deckOpen;
    item.classList.toggle("is-open", state.deckOpen);
  });
  shell.appendChild(item);

  const actions = document.createElement("div");
  actions.className = "deck-actions";
  actions.innerHTML = `<span class="pill">${state.deckIndex + 1}/${cards.length}</span>`;

  const prev = document.createElement("button");
  prev.className = "secondary-button";
  prev.type = "button";
  prev.textContent = "Thẻ trước";
  prev.addEventListener("click", () => moveDeck(-1));

  const next = document.createElement("button");
  next.className = "primary-button";
  next.type = "button";
  next.textContent = "Thẻ tiếp";
  next.addEventListener("click", () => moveDeck(1));

  actions.prepend(prev);
  actions.appendChild(next);
  shell.appendChild(actions);
  deckGrid.appendChild(shell);
}

function moveDeck(direction) {
  const cards = flashcardsFromFolders();
  if (!cards.length) return;
  state.deckIndex = (state.deckIndex + direction + cards.length) % cards.length;
  state.deckOpen = false;
  renderDeck();
}

filters.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

function setFilter(filter) {
  filters.forEach((item) => item.classList.toggle("active", item.dataset.filter === filter));
  state.filter = filter;
  state.index = 0;
  renderQuestion();
  scrollQuestionIntoView();
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

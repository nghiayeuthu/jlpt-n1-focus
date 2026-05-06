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

const exam202507Questions = [
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "1. 余暇の楽しみ方は色々ある。読み方は？", ["ようか", "よか", "よが", "ようが"], 1, "余暇 = よか, thời gian rảnh."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "2. その動物は動きが鈍い。読み方は？", ["するどい", "にぶい", "あらい", "あやうい"], 1, "鈍い = にぶい, chậm/chậm chạp."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "3. 検閲は行われていない。読み方は？", ["けんさく", "けんえき", "けんせつ", "けんえつ"], 3, "検閲 = けんえつ, kiểm duyệt."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "4. 彼の唱える理念は崇高なものだ。読み方は？", ["すうこう", "しゅうこう", "しょうこう", "そうこう"], 0, "崇高 = すうこう, cao cả."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "5. 自分には裁くことができなかった。読み方は？", ["あばく", "つらぬく", "あざむく", "さばく"], 3, "裁く = さばく, xét xử/phán xử."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "6. 親友に複雑な胸中を打ち明ける。読み方は？", ["きょうじゅう", "きゅうちゅう", "きょうちゅう", "きゅうじゅう"], 2, "胸中 = きょうちゅう, trong lòng/tâm tư."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "7. 二つの会社の（　）によって、国内最大規模の食品会社が誕生した。", ["合併", "連鎖", "合致", "連帯"], 0, "会社の合併 = sự sáp nhập công ty."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "8. 中山さんは（　）が器用で、子供たちの洋服はすべて自分で作っているそうだ。", ["手元", "手芸", "手先", "手際"], 2, "手先が器用 = khéo tay."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "9. 彼はまだ19歳だが、20歳以上が参加できるイベントに年齢を（　）参加しようとした。", ["惑わして", "ごまかして", "裏切って", "くらまして"], 1, "年齢をごまかす = khai gian tuổi."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "10. 活動報告の案をまとめたので、確認の上、足りない点があれば（　）してください。", ["混入", "添加", "加筆", "注入"], 2, "加筆する = viết bổ sung/thêm ý vào văn bản."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "11. 原田さんは育児で何年も（　）があったが、資格を取得し再就職が決まったそうだ。", ["ブランク", "ギャップ", "フリー", "ブレイク"], 0, "ブランク = khoảng trống/ngắt quãng nghề nghiệp."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "12. 近頃の彼女の態度から、彼女の気持ちが変わったことには（　）気づいていた。", ["そよそよ", "うすうす", "ひんやり", "しっとり"], 1, "うすうす気づく = lờ mờ nhận ra."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "13. 古い曲を聞いていたら、子供の頃の友の顔が（　）に浮かんだ。", ["内心", "頭上", "眼下", "脳裏"], 3, "脳裏に浮かぶ = hiện lên trong tâm trí."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "14. まだいくつか着手していない仕事がある。意味が近いものは？", ["終わらせて", "引き受けて", "始めて", "やり直して"], 2, "着手する = bắt tay vào/bắt đầu."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "15. このトレンドはしばらく続くものと見られている。意味が近いものは？", ["関係", "議論", "混乱", "傾向"], 3, "トレンド = xu hướng/khuynh hướng."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "16. 中川さんは転職した会社で破格の待遇を受けたらしい。意味が近いものは？", ["最も低い", "不公平な", "希望どおりの", "特別によい"], 3, "破格の待遇 = đãi ngộ đặc biệt tốt."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "17. 小学生の頃、友達を冷やかして叱られた。意味が近いものは？", ["だまして", "からかって", "驚かせて", "たたいて"], 1, "冷やかす = trêu chọc."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "18. 話を聞いた大木さんは怪訝な顔をした。意味が近いものは？", ["傷ついたような", "あきれたような", "不思議そうな", "残念そうな"], 2, "怪訝な顔 = vẻ mặt nghi hoặc/khó hiểu."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "19. 娘は反抗期なので、親の言うことに悉く反発する。意味が近いものは？", ["すべて", "激しく", "しつこく", "わざと"], 0, "悉く = toàn bộ, mọi thứ."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "20. 「保留」の使い方として最もよいものは？", ["店員さんが迷子を保留してくれた。", "先方への返答を保留した。", "顧客のデータは随時パソコンに保留している。", "帰ろうとしたら保留された。"], 1, "返答を保留する = tạm hoãn câu trả lời/quyết định."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "21. 「緩和」の使い方として最もよいものは？", ["苦情の緩和につながるだろう。", "職場環境の緩和が行われた。", "経費の緩和が可能になる。", "混雑の緩和が期待される。"], 3, "混雑の緩和 = giảm ùn tắc/giảm đông đúc."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "22. 「程遠い」の使い方として最もよいものは？", ["まだ目標には程遠い。", "友人とのつながりが程遠くなっている。", "記憶が程遠くなっている。", "年齢や趣味は程遠いが仲がいい。"], 0, "目標には程遠い = còn xa mới đạt mục tiêu."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "23. 「まろやか」の使い方として最もよいものは？", ["子どもにまろやかに話しかけた。", "妹はまろやかな性格だ。", "砂糖を入れたらまろやかな味になった。", "この毛布はとてもまろやかだ。"], 2, "まろやかな味 = vị dịu, êm, tròn vị."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "24. 「脱却」の使い方として最もよいものは？", ["古い体制から脱却する。", "テニスのサークルを脱却した。", "予想を脱却するタイムで優勝した。", "会場から脱却して休憩した。"], 0, "古い体制から脱却する = thoát khỏi cơ chế cũ."),
  q("exam-2025-07", "2025 tháng 7 - Từ vựng", "25. 「使いこなす」の使い方として最もよいものは？", ["今年度の予算は使いこなしてしまった。", "態度を使いこなす。", "かばんを使いこなすとつやが出る。", "機材を使いこなしていた。"], 3, "機材を使いこなす = sử dụng thành thạo thiết bị."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "26. 好きなことを我慢して（　）する節約は長く続かないと思う。", ["さえ", "まで", "こそ", "のみ"], 1, "Vてまで = đến mức phải làm gì."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "27. 脳科学の研究が進んだ現代（　）、人が夢を見るメカニズムについては解明できない部分が多い。", ["にあっても", "に至っては", "をめぐって", "を踏まえて"], 0, "現代にあっても = ngay cả trong thời hiện đại."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "28. 同僚の山川さんは、相手が（　）おかしいと思ったことを指摘せずにはいられない性格だ。", ["先輩やら上司やら", "先輩なり上司なり", "先輩というか上司というか", "先輩だろうが上司だろうが"], 3, "AだろうがBだろうが = dù là A hay B."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "29. 今日だけは遅刻できない（　）、なぜか電車が遅れる。", ["ときに限って", "ことに反して", "というときに限って", "ということに反して"], 2, "というときに限って = đúng vào lúc... thì lại."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "30. この小説は、政界の権力の争いを題材（　）、描かれているのは家族のきずなである。", ["であることで", "とすることで", "でありながらも", "としながらも"], 3, "題材としながらも = tuy lấy làm đề tài nhưng."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "31. 足首をひねっただけなので、病院で（　）、今朝もまだ少し痛む。", ["診てもらうほどではないものの", "診てもらうほどではないどころか", "診てもらわなくてはならないものの", "診てもらわなくてはならないどころか"], 0, "ほどではないものの = tuy chưa đến mức... nhưng."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "32. 息子は子どもの頃、色の好き嫌いがはっきりしていて、嫌な服を決して（　）。", ["着るまでもなかった", "着るわけにはいかなかった", "着ようがなかった", "着ようとはしなかった"], 3, "Vようとはしない = không hề định/không chịu làm."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "33. （ホームページで）弊社は地球環境に配慮した製品の開発をさらに進めて（　）。", ["まいります", "いたします", "いらっしゃいます", "なさいます"], 0, "まいります là kính ngữ khiêm nhường cho chủ thể là công ty mình."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "34. 友人の誘いを断らなければ、今ごろ部長ぐらいには（　）。", ["なってきたようだ", "なっていたかもしれない", "なってほしいようだ", "なっていくかもしれない"], 1, "なっていたかもしれない = có lẽ đã trở thành, giả định trái thực tế."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "35. あんな大きな問題を起こした彼が、何の責任も（　）。", ["取りかねないわけだ", "取らざるを得ないわけだ", "取らずに済むわけがない", "取りきれるわけがない"], 3, "責任を取りきれるわけがない = không thể nào gánh hết trách nhiệm."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "36. 高級車には憧れるが、私の給料では、宝くじに＿＿＿ ＿＿＿ ★ ＿＿＿一生買いそうにない。★に入る語は？", ["しない", "でも", "当たり", "限り"], 0, "正しい順序: 当たり / でも / しない / 限り."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "37. 年中無休で営業していて、私たちの日常生活に欠かせない＿＿＿ ＿＿＿ ★ ＿＿＿店舗も出てきている。★に入る語は？", ["コンビニだが", "定休日を設ける", "近年の人手不足などにより", "存在である"], 2, "正しい順序: 存在である / コンビニだが / 近年の人手不足などにより / 定休日を設ける."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "38. 3歳の娘は毎日同じDVDを見ている。いくら＿＿＿ ＿＿＿ ★ ＿＿＿その様子がない。★に入る語は？", ["一向に", "飽きそうなものなのに", "毎日見ていたら", "好きだからといって"], 1, "正しい順序: 好きだからといって / 毎日見ていたら / 飽きそうなものなのに / 一向に."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "39. 夜中に何度も目が覚める＿＿＿ ＿＿＿ ★ ＿＿＿可能性があります。★に入る語は？", ["何らかの病気の", "といった", "睡眠に関する症状は", "サインである"], 0, "正しい順序: といった / 睡眠に関する症状は / 何らかの病気の / サインである."),
  q("exam-2025-07", "2025 tháng 7 - Ngữ pháp", "40. 専門家による＿＿＿ ＿＿＿ ★ ＿＿＿深く考えさせられた。★に入る語は？", ["現状について", "便利で快適な暮らしと引き換えに", "講演を聞いて", "限りある大切な資源が失われつつある"], 0, "正しい順序: 便利で快適な暮らしと引き換えに / 限りある大切な資源が失われつつある / 現状について / 講演を聞いて."),
  q(
    "exam-2025-07",
    "2025 tháng 7 - Ngữ pháp đoạn văn",
    "41. 文中の（41）に入る最もよいものは？",
    ["しか", "なら", "すらも", "だけが"],
    3,
    "それだけが人との関わりではありません = không phải chỉ có thế mới là quan hệ giữa người với người.",
    "以下は、元アナウンサーが人間関係やコミュニケーションについて書いた文章である。\n\n元アナウンサーなのでよく「失敗しないコミュニケーション術を教えてください」ときかれます。失敗しないコミュニケーションとはなんでしょう。ニュースキャスターのように滑らかに喋れるようになること？ ひな壇トークの真似事が上手になること？ 私はどちらも違うと思います。\n\nそもそも、コミュニケーションの目的はなんでしょうか。誰からも嫌われないこと？ 注目されること？ ほめられること？ 賢そうに見せること？ 相手を思い通りに動かすこと？ なるほど、どれも就活の面接や仕事のプレゼンでは役に立ちそうですね。でも、それ（41）人との関わりではありません。\n\n私は、今でも人と関わることが苦手です。もっと人の気持ちをわかるようになりたいと悔いることばかりです。でも、みんな脳みそが違うからどうしたってわからないのです。それなりに考えて言った言葉に対して予期せぬ反応が返ってくることも珍しくありません。迂闊なミスもあります。相手の心のコンディションにもよります。人とのやりとりは、しょっちゅう（42）。\n\n相手の反応が予測と違った時は、関係を変化させる好機でもあります。ずれの修正の過程で以前より親しくなることも。誤解を（43）長い話し合いが必要になるでしょう。それにちゃんと取り組むのはなかなか胆力がいります。このめんどくさいやりとりこそが、人との関わりの醍醐味です。摩擦を回避するために「失敗しない会話」をマスターしようとするのは、むしろコミュニケーションからの（44）。\n\nそつなく話す人が増えるよりも、めんどくさくても時間がかかっても、なんとかして伝えられないかと悩む人、つまり諦めが悪く懲りない人が増える方が、世の中は寛容で豊かになるでしょう。失敗万歳です。\n\n（注1）ひな壇トークの真似事：テレビに出るタレントのように、テンポよく話すこと\n（注2）そつなく：要領よく"
  ),
  q(
    "exam-2025-07",
    "2025 tháng 7 - Ngữ pháp đoạn văn",
    "42. 文中の（42）に入る最もよいものは？",
    ["失敗するに越したことはありません", "失敗するわけにはいきません", "失敗するものなのです", "失敗するほどです"],
    2,
    "前後で『ミスもある』『予期せぬ反応が返る』と述べているので、人とのやりとりは失敗するものだ、という流れです.",
    "以下は、元アナウンサーが人間関係やコミュニケーションについて書いた文章である。\n\n元アナウンサーなのでよく「失敗しないコミュニケーション術を教えてください」ときかれます。失敗しないコミュニケーションとはなんでしょう。ニュースキャスターのように滑らかに喋れるようになること？ ひな壇トークの真似事が上手になること？ 私はどちらも違うと思います。\n\nそもそも、コミュニケーションの目的はなんでしょうか。誰からも嫌われないこと？ 注目されること？ ほめられること？ 賢そうに見せること？ 相手を思い通りに動かすこと？ なるほど、どれも就活の面接や仕事のプレゼンでは役に立ちそうですね。でも、それ（41）人との関わりではありません。\n\n私は、今でも人と関わることが苦手です。もっと人の気持ちをわかるようになりたいと悔いることばかりです。でも、みんな脳みそが違うからどうしたってわからないのです。それなりに考えて言った言葉に対して予期せぬ反応が返ってくることも珍しくありません。迂闊なミスもあります。相手の心のコンディションにもよります。人とのやりとりは、しょっちゅう（42）。\n\n相手の反応が予測と違った時は、関係を変化させる好機でもあります。ずれの修正の過程で以前より親しくなることも。誤解を（43）長い話し合いが必要になるでしょう。それにちゃんと取り組むのはなかなか胆力がいります。このめんどくさいやりとりこそが、人との関わりの醍醐味です。摩擦を回避するために「失敗しない会話」をマスターしようとするのは、むしろコミュニケーションからの（44）。"
  ),
  q(
    "exam-2025-07",
    "2025 tháng 7 - Ngữ pháp đoạn văn",
    "43. 文中の（43）に入る最もよいものは？",
    ["解くためには", "解かなければ", "解いたうえで", "解いたからこそ"],
    0,
    "誤解を解くためには長い話し合いが必要 = để tháo gỡ hiểu lầm thì cần nói chuyện lâu.",
    "相手の反応が予測と違った時は、関係を変化させる好機でもあります。ずれの修正の過程で以前より親しくなることも。誤解を（43）長い話し合いが必要になるでしょう。それにちゃんと取り組むのはなかなか胆力がいります。このめんどくさいやりとりこそが、人との関わりの醍醐味です。摩擦を回避するために「失敗しない会話」をマスターしようとするのは、むしろコミュニケーションからの（44）。"
  ),
  q(
    "exam-2025-07",
    "2025 tháng 7 - Ngữ pháp đoạn văn",
    "44. 文中の（44）に入る最もよいものは？",
    ["逃避だと思うでしょう", "逃避でしょう", "逃避だと思いがちです", "逃避であるかのようです"],
    1,
    "筆者は『失敗しない会話』を目指して摩擦を避けることを、コミュニケーションからの逃避だと述べています.",
    "このめんどくさいやりとりこそが、人との関わりの醍醐味です。摩擦を回避するために「失敗しない会話」をマスターしようとするのは、むしろコミュニケーションからの（44）。"
  ),
];

questions.push(...exam202507Questions);

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
  if (state.filter === "all") return questions;
  if (state.filter.startsWith("exam-")) return questions.filter((item) => item.type === state.filter);
  return questions.filter((item) => item.type === state.filter);
}

function q(type, label, prompt, options, answer, explanation, passageText = "") {
  return { type, label, prompt, options, answer, explanation, passage: passageText };
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

import type { Question } from "../../types/Question";

// 15 PARTICULES ESSENTIELLES

export const particulesVocab = [
  {
    particle: "は (wa)",
    romaji: "wa",
    usage: "Marqueur de thème / sujet",
    description:
      "Indique le thème de la phrase (attention : se prononce 'wa' mais s'écrit avec le hiragana は)",
    examples: [
      "私は学生です。 (Watashi wa gakusei desu.) - Je suis étudiant.",
      "これは本です。 (Kore wa hon desu.) - Ceci est un livre.",
    ],
  },
  {
    particle: "が (ga)",
    romaji: "ga",
    usage: "Marqueur de sujet / emphase",
    description:
      "Indique le sujet de l'action, souvent pour insister ou pour les questions",
    examples: [
      "誰が来ますか？ (Dare ga kimasu ka?) - Qui vient ?",
      "雨が降っています。 (Ame ga futte imasu.) - Il pleut.",
    ],
  },
  {
    particle: "を (o)",
    romaji: "o",
    usage: "Marqueur d'objet direct",
    description: "Indique l'objet direct du verbe (ce qui subit l'action)",
    examples: [
      "ご飯を食べます。 (Gohan o tabemasu.) - Je mange du riz.",
      "本を読みます。 (Hon o yomimasu.) - Je lis un livre.",
    ],
  },
  {
    particle: "に (ni)",
    romaji: "ni",
    usage: "Destination / temps / but",
    description: "Indique une destination, un moment dans le temps, ou un but",
    examples: [
      "学校に行きます。 (Gakkō ni ikimasu.) - Je vais à l'école.",
      "３時に会います。 (Sanji ni aimasu.) - On se voit à 3 heures.",
    ],
  },
  {
    particle: "で (de)",
    romaji: "de",
    usage: "Lieu d'action / moyen",
    description: "Indique le lieu où se passe l'action, ou le moyen utilisé",
    examples: [
      "家で勉強します。 (Ie de benkyō shimasu.) - J'étudie à la maison.",
      "電車で行きます。 (Densha de ikimasu.) - Je vais en train.",
    ],
  },
  {
    particle: "へ (e)",
    romaji: "e",
    usage: "Direction",
    description:
      "Indique une direction générale (se prononce 'e' mais s'écrit へ)",
    examples: [
      "東京へ行きます。 (Tōkyō e ikimasu.) - Je vais à Tokyo.",
      "右へ曲がってください。 (Migi e magatte kudasai.) - Tournez à droite.",
    ],
  },
  {
    particle: "と (to)",
    romaji: "to",
    usage: "Avec / et (liste complète)",
    description: "Indique la compagnie ou énumère une liste complète",
    examples: [
      "友達と映画を見ます。 (Tomodachi to eiga o mimasu.) - Je regarde un film avec un ami.",
      "りんごとバナナを買いました。 (Ringo to banana o kaimashita.) - J'ai acheté une pomme et une banane.",
    ],
  },
  {
    particle: "から (kara)",
    romaji: "kara",
    usage: "Depuis / à partir de",
    description: "Indique le point de départ dans l'espace ou le temps",
    examples: [
      "日本から来ました。 (Nihon kara kimashita.) - Je viens du Japon.",
      "９時から働きます。 (Kuji kara hatarakimasu.) - Je travaille à partir de 9h.",
    ],
  },
  {
    particle: "まで (made)",
    romaji: "made",
    usage: "Jusqu'à",
    description: "Indique la limite dans l'espace ou le temps",
    examples: [
      "駅まで歩きます。 (Eki made arukimasu.) - Je marche jusqu'à la gare.",
      "５時まで待ちます。 (Goji made machimasu.) - J'attends jusqu'à 5h.",
    ],
  },
  {
    particle: "より (yori)",
    romaji: "yori",
    usage: "Que / plus que (comparaison)",
    description: "Utilisé pour les comparaisons",
    examples: [
      "猫は犬より小さいです。 (Neko wa inu yori chiisai desu.) - Les chats sont plus petits que les chiens.",
      "今日は昨日より寒いです。 (Kyō wa kinō yori samui desu.) - Aujourd'hui il fait plus froid qu'hier.",
    ],
  },
  {
    particle: "も (mo)",
    romaji: "mo",
    usage: "Aussi / même",
    description: "Ajoute le sens de 'aussi' ou 'même'",
    examples: [
      "私も行きます。 (Watashi mo ikimasu.) - Moi aussi je vais.",
      "水も飲みます。 (Mizu mo nomimasu.) - Je bois de l'eau aussi.",
    ],
  },
  {
    particle: "や (ya)",
    romaji: "ya",
    usage: "Et (liste incomplète)",
    description: "Énumère des exemples dans une liste non-exhaustive",
    examples: [
      "果物や野菜を買いました。 (Kudamono ya yasai o kaimashita.) - J'ai acheté des fruits, des légumes, etc.",
      "本や雑誌を読みます。 (Hon ya zasshi o yomimasu.) - Je lis des livres, des magazines, etc.",
    ],
  },
  {
    particle: "か (ka)",
    romaji: "ka",
    usage: "Marqueur de question",
    description: "Transforme une phrase en question (à la fin de la phrase)",
    examples: [
      "元気ですか？ (Genki desu ka?) - Comment vas-tu ?",
      "これは何ですか？ (Kore wa nan desu ka?) - Qu'est-ce que c'est ?",
    ],
  },
  {
    particle: "ね (ne)",
    romaji: "ne",
    usage: "N'est-ce pas ?",
    description: "Demande confirmation ou accord (à la fin de la phrase)",
    examples: [
      "いい天気ですね。 (Ii tenki desu ne.) - Il fait beau, n'est-ce pas ?",
      "美味しいですね。 (Oishii desu ne.) - C'est bon, n'est-ce pas ?",
    ],
  },
  {
    particle: "よ (yo)",
    romaji: "yo",
    usage: "Affirmation / insistance",
    description:
      "Ajoute de l'insistance ou une affirmation (à la fin de la phrase)",
    examples: [
      "大丈夫ですよ。 (Daijōbu desu yo.) - Ça va, je t'assure.",
      "知っていますよ。 (Shitte imasu yo.) - Je le sais, tu sais.",
    ],
  },
];

export const particulesQuestions: Question[] = [
  // QUESTIONS 1-15 : FRANÇAIS → JAPONAIS
  {
    id: 1,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule marque le THÈME de la phrase ?",
    options: [
      { text: "が (ga)", correct: false },
      { text: "は (wa)", correct: true },
      { text: "を (o)", correct: false },
      { text: "に (ni)", correct: false },
    ],
  },
  {
    id: 2,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule marque le SUJET avec EMPHASE ?",
    options: [
      { text: "は (wa)", correct: false },
      { text: "が (ga)", correct: true },
      { text: "を (o)", correct: false },
      { text: "に (ni)", correct: false },
    ],
  },
  {
    id: 3,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule marque l'OBJET DIRECT du verbe ?",
    options: [
      { text: "が (ga)", correct: false },
      { text: "を (o)", correct: true },
      { text: "に (ni)", correct: false },
      { text: "で (de)", correct: false },
    ],
  },
  {
    id: 4,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule indique une DESTINATION ou un MOMENT ?",
    options: [
      { text: "で (de)", correct: false },
      { text: "に (ni)", correct: true },
      { text: "へ (e)", correct: false },
      { text: "から (kara)", correct: false },
    ],
  },
  {
    id: 5,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule indique le LIEU où se passe l'action ?",
    options: [
      { text: "に (ni)", correct: false },
      { text: "で (de)", correct: true },
      { text: "へ (e)", correct: false },
      { text: "と (to)", correct: false },
    ],
  },
  {
    id: 6,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule indique une DIRECTION ?",
    options: [
      { text: "に (ni)", correct: false },
      { text: "へ (e)", correct: true },
      { text: "で (de)", correct: false },
      { text: "まで (made)", correct: false },
    ],
  },
  {
    id: 7,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'AVEC' ou 'ET' (liste complète) ?",
    options: [
      { text: "や (ya)", correct: false },
      { text: "と (to)", correct: true },
      { text: "も (mo)", correct: false },
      { text: "か (ka)", correct: false },
    ],
  },
  {
    id: 8,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'DEPUIS' ?",
    options: [
      { text: "まで (made)", correct: false },
      { text: "から (kara)", correct: true },
      { text: "より (yori)", correct: false },
      { text: "へ (e)", correct: false },
    ],
  },
  {
    id: 9,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'JUSQU\'À' ?",
    options: [
      { text: "から (kara)", correct: false },
      { text: "まで (made)", correct: true },
      { text: "より (yori)", correct: false },
      { text: "で (de)", correct: false },
    ],
  },
  {
    id: 10,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule est utilisée pour les COMPARAISONS ?",
    options: [
      { text: "まで (made)", correct: false },
      { text: "より (yori)", correct: true },
      { text: "から (kara)", correct: false },
      { text: "と (to)", correct: false },
    ],
  },
  {
    id: 11,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'AUSSI' ?",
    options: [
      { text: "や (ya)", correct: false },
      { text: "も (mo)", correct: true },
      { text: "か (ka)", correct: false },
      { text: "ね (ne)", correct: false },
    ],
  },
  {
    id: 12,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'ET' (liste incomplète) ?",
    options: [
      { text: "と (to)", correct: false },
      { text: "や (ya)", correct: true },
      { text: "も (mo)", correct: false },
      { text: "か (ka)", correct: false },
    ],
  },
  {
    id: 13,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule transforme une phrase en QUESTION ?",
    options: [
      { text: "ね (ne)", correct: false },
      { text: "か (ka)", correct: true },
      { text: "よ (yo)", correct: false },
      { text: "も (mo)", correct: false },
    ],
  },
  {
    id: 14,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule signifie 'N\'EST-CE PAS' ?",
    options: [
      { text: "か (ka)", correct: false },
      { text: "ね (ne)", correct: true },
      { text: "よ (yo)", correct: false },
      { text: "も (mo)", correct: false },
    ],
  },
  {
    id: 15,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle particule ajoute de l'INSISTANCE ?",
    options: [
      { text: "ね (ne)", correct: false },
      { text: "よ (yo)", correct: true },
      { text: "か (ka)", correct: false },
      { text: "も (mo)", correct: false },
    ],
  },

  // QUESTIONS 16-30 : JAPONAIS → FRANÇAIS
  {
    id: 16,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'は (wa)' ?",
    options: [
      { text: "Marqueur de sujet avec emphase", correct: false },
      { text: "Marqueur de thème", correct: true },
      { text: "Objet direct", correct: false },
      { text: "Destination", correct: false },
    ],
  },
  {
    id: 17,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'が (ga)' ?",
    options: [
      { text: "Marqueur de thème", correct: false },
      { text: "Marqueur de sujet avec emphase", correct: true },
      { text: "Objet direct", correct: false },
      { text: "Lieu d'action", correct: false },
    ],
  },
  {
    id: 18,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'を (o)' ?",
    options: [
      { text: "Marqueur de thème", correct: false },
      { text: "Objet direct", correct: true },
      { text: "Destination", correct: false },
      { text: "Direction", correct: false },
    ],
  },
  {
    id: 19,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'に (ni)' ?",
    options: [
      { text: "Lieu d'action", correct: false },
      { text: "Destination ou moment", correct: true },
      { text: "Direction", correct: false },
      { text: "Moyen", correct: false },
    ],
  },
  {
    id: 20,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'で (de)' ?",
    options: [
      { text: "Destination", correct: false },
      { text: "Lieu d'action ou moyen", correct: true },
      { text: "Direction", correct: false },
      { text: "Comparaison", correct: false },
    ],
  },
  {
    id: 21,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'へ (e)' ?",
    options: [
      { text: "Lieu d'action", correct: false },
      { text: "Direction", correct: true },
      { text: "Destination précise", correct: false },
      { text: "Moyen", correct: false },
    ],
  },
  {
    id: 22,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'と (to)' ?",
    options: [
      { text: "Liste incomplète", correct: false },
      { text: "Avec ou et (liste complète)", correct: true },
      { text: "Aussi", correct: false },
      { text: "Question", correct: false },
    ],
  },
  {
    id: 23,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'から (kara)' ?",
    options: [
      { text: "Jusqu'à", correct: false },
      { text: "Depuis", correct: true },
      { text: "Plus que", correct: false },
      { text: "Avec", correct: false },
    ],
  },
  {
    id: 24,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'まで (made)' ?",
    options: [
      { text: "Depuis", correct: false },
      { text: "Jusqu'à", correct: true },
      { text: "Comparaison", correct: false },
      { text: "Lieu", correct: false },
    ],
  },
  {
    id: 25,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'より (yori)' ?",
    options: [
      { text: "Aussi", correct: false },
      { text: "Comparaison", correct: true },
      { text: "Question", correct: false },
      { text: "Affirmation", correct: false },
    ],
  },
  {
    id: 26,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'も (mo)' ?",
    options: [
      { text: "Et", correct: false },
      { text: "Aussi", correct: true },
      { text: "Question", correct: false },
      { text: "N'est-ce pas", correct: false },
    ],
  },
  {
    id: 27,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'や (ya)' ?",
    options: [
      { text: "Et (liste complète)", correct: false },
      { text: "Et (liste incomplète)", correct: true },
      { text: "Aussi", correct: false },
      { text: "Depuis", correct: false },
    ],
  },
  {
    id: 28,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'か (ka)' ?",
    options: [
      { text: "N'est-ce pas", correct: false },
      { text: "Marqueur de question", correct: true },
      { text: "Affirmation", correct: false },
      { text: "Insistance", correct: false },
    ],
  },
  {
    id: 29,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'ね (ne)' ?",
    options: [
      { text: "Question", correct: false },
      { text: "N'est-ce pas", correct: true },
      { text: "Insistance", correct: false },
      { text: "Aussi", correct: false },
    ],
  },
  {
    id: 30,
    category: "grammaire",
    subCategory: "particules",
    question: "Quelle est la fonction de la particule 'よ (yo)' ?",
    options: [
      { text: "Question", correct: false },
      { text: "Affirmation/insistance", correct: true },
      { text: "N'est-ce pas", correct: false },
      { text: "Aussi", correct: false },
    ],
  },
];

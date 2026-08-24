export const particulesVocab = [
  {
    particle: "は (wa)",
    romaji: "wa",
    usage: "Marqueur de thème",
    description:
      "Indique le thème de la phrase. On peut le comprendre comme « en ce qui concerne... ». Attention : は s'écrit avec le hiragana は mais se prononce « wa » comme particule.",
    examples: [
      "私は学生です。 (Watashi wa gakusei desu.) - Je suis étudiant.",
      "これは本です。 (Kore wa hon desu.) - Ceci est un livre.",
    ],
  },

  {
    particle: "が (ga)",
    romaji: "ga",
    usage: "Marqueur de sujet / identification",
    description:
      "Indique le sujet ou permet d'identifier précisément qui ou quoi fait l'action. On peut souvent le comprendre comme « c'est X qui... ».",
    examples: [
      "誰が来ますか？ (Dare ga kimasu ka?) - Qui vient ?",
      "田中さんが来ます。 (Tanaka-san ga kimasu.) - C'est Tanaka qui vient.",
    ],
  },

  {
    particle: "を (o)",
    romaji: "o",
    usage: "Marqueur d'objet direct",
    description:
      "Indique ce qui subit directement l'action du verbe. Attention : を s'écrit avec le hiragana を mais se prononce « o ».",
    examples: [
      "ご飯を食べます。 (Gohan o tabemasu.) - Je mange du riz.",
      "本を読みます。 (Hon o yomimasu.) - Je lis un livre.",
    ],
  },

  {
    particle: "に (ni)",
    romaji: "ni",
    usage: "Destination / moment précis",
    description:
      "Indique notamment une destination ou un moment précis. Pour un déplacement, on peut retenir « où vais-je ? » : に indique la destination.",
    examples: [
      "学校に行きます。 (Gakkō ni ikimasu.) - Je vais à l'école.",
      "東京に行きます。 (Tōkyō ni ikimasu.) - Je vais à Tokyo.",
      "３時に会います。 (Sanji ni aimasu.) - On se voit à 3 heures.",
    ],
  },

  {
    particle: "へ (e)",
    romaji: "e",
    usage: "Direction / vers",
    description:
      "Indique la direction vers laquelle on se dirige. Avec un verbe de déplacement, に et へ peuvent tous les deux être utilisés. Pour retenir simplement la différence : に insiste davantage sur la destination, tandis que へ insiste davantage sur la direction. Attention : へ se prononce « e » comme particule.",
    examples: [
      "東京へ行きます。 (Tōkyō e ikimasu.) - Je vais vers Tokyo.",
      "右へ曲がります。 (Migi e magarimasu.) - Je tourne vers la droite.",
    ],
  },

  {
    particle: "と (to)",
    romaji: "to",
    usage: "Et / avec",
    description:
      "Relie des éléments dans une liste complète ou indique la personne avec laquelle on fait une action. Pour une liste, と donne l'idée que les éléments énumérés constituent la liste.",
    examples: [
      "りんごとバナナを買いました。 (Ringo to banana o kaimashita.) - J'ai acheté des pommes et des bananes.",
      "友達と映画を見ます。 (Tomodachi to eiga o mimasu.) - Je regarde un film avec un ami.",
    ],
  },

  {
    particle: "や (ya)",
    romaji: "ya",
    usage: "Et... / liste non exhaustive",
    description:
      "Énumère quelques exemples d'une liste qui n'est pas complète. On peut l'associer mentalement aux « ... » en français : on donne certains éléments et la liste pourrait continuer.",
    examples: [
      "りんごやバナナを買いました。 (Ringo ya banana o kaimashita.) - J'ai acheté des pommes, des bananes, etc.",
      "本や雑誌を読みます。 (Hon ya zasshi o yomimasu.) - Je lis des livres, des magazines, etc.",
    ],
  },

  {
    particle: "から (kara)",
    romaji: "kara",
    usage: "Depuis / à partir de",
    description:
      "Indique le point de départ dans le temps ou dans l'espace. On peut retenir « depuis / à partir de ».",
    examples: [
      "日本から来ました。 (Nihon kara kimashita.) - Je viens du Japon.",
      "９時から働きます。 (Kuji kara hatarakimasu.) - Je travaille à partir de 9 heures.",
      "学校から歩きます。 (Gakkō kara arukimasu.) - Je marche depuis l'école.",
    ],
  },

  {
    particle: "まで (made)",
    romaji: "made",
    usage: "Jusqu'à / limite",
    description:
      "Indique la limite jusqu'à laquelle quelque chose s'étend, dans le temps ou dans l'espace. Avec から, il permet d'exprimer l'idée « de... à... » ou « depuis... jusqu'à... ».",
    examples: [
      "駅まで歩きます。 (Eki made arukimasu.) - Je marche jusqu'à la gare.",
      "５時まで待ちます。 (Goji made machimasu.) - J'attends jusqu'à 5 heures.",
      "９時から５時まで働きます。 (Kuji kara goji made hatarakimasu.) - Je travaille de 9 heures à 17 heures.",
    ],
  },

  {
    particle: "ね (ne)",
    romaji: "ne",
    usage: "Accord / confirmation",
    description:
      "Sert à rechercher l'accord ou la confirmation de l'interlocuteur. On peut souvent le traduire par « n'est-ce pas ? », « hein ? » ou « tu trouves aussi ? ».",
    examples: [
      "いい天気ですね。 (Ii tenki desu ne.) - Il fait beau, n'est-ce pas ?",
      "美味しいですね。 (Oishii desu ne.) - C'est bon, hein ?",
    ],
  },

  {
    particle: "よ (yo)",
    romaji: "yo",
    usage: "Information / insistance",
    description:
      "Sert à affirmer ou à transmettre une information à l'interlocuteur. Contrairement à ね, on ne cherche pas son approbation : on lui donne ou confirme une information.",
    examples: [
      "大丈夫ですよ。 (Daijōbu desu yo.) - Ça va, je te l'assure.",
      "明日は休みですよ。 (Ashita wa yasumi desu yo.) - Demain, c'est congé, je te le dis.",
    ],
  },

  {
    particle: "だけ (dake)",
    romaji: "dake",
    usage: "Seulement / uniquement",
    description:
      "Limite quelque chose et signifie « seulement » ou « uniquement ». Contrairement à しか, だけ ne nécessite pas de verbe à la forme négative.",
    examples: [
      "水だけ飲みます。 (Mizu dake nomimasu.) - Je bois seulement de l'eau.",
      "これだけです。 (Kore dake desu.) - C'est seulement ça / C'est tout.",
      "一つだけ買います。 (Hitotsu dake kaimasu.) - J'en achète seulement un.",
    ],
  },

  {
    particle: "しか (shika)",
    romaji: "shika",
    usage: "Ne... que / seulement",
    description:
      "Exprime « ne... que » et s'utilise obligatoirement avec une forme négative. Une phrase négative ne nécessite cependant pas しか.",
    examples: [
      "水しか飲みません。 (Mizu shika nomimasen.) - Je ne bois que de l'eau.",
      "これしかありません。 (Kore shika arimasen.) - Il n'y a que ça.",
    ],
  },

  {
    particle: "より (yori)",
    romaji: "yori",
    usage: "Comparaison / que",
    description:
      "Indique le point de comparaison. Dans une structure comme A は B より + adjectif, on compare A à B. より correspond souvent à « que » ou « par rapport à » en français.",
    examples: [
      "猫は犬より小さいです。 (Neko wa inu yori chiisai desu.) - Le chat est plus petit que le chien.",
      "今日は昨日より暑いです。 (Kyō wa kinō yori atsui desu.) - Aujourd'hui, il fait plus chaud qu'hier.",
    ],
  },

  {
    particle: "も (mo)",
    romaji: "mo",
    usage: "Aussi / également",
    description:
      "Ajoute une personne ou une chose à ce qui vient d'être dit. Il signifie principalement « aussi » ou « également » et remplace souvent une autre particule comme は.",
    examples: [
      "私は学生です。彼も学生です。 (Watashi wa gakusei desu. Kare mo gakusei desu.) - Je suis étudiant. Lui aussi est étudiant.",
      "私も行きます。 (Watashi mo ikimasu.) - Moi aussi, j'y vais.",
    ],
  },

  {
    particle: "か (ka)",
    romaji: "ka",
    usage: "Marqueur de question",
    description:
      "Placée généralement à la fin d'une phrase, elle transforme une affirmation en question.",
    examples: [
      "元気ですか？ (Genki desu ka?) - Comment vas-tu ?",
      "これは何ですか？ (Kore wa nan desu ka?) - Qu'est-ce que c'est ?",
      "学生ですか？ (Gakusei desu ka?) - Es-tu étudiant ?",
    ],
  },

  {
    particle: "の (no)",
    romaji: "no",
    usage: "Possession / relation",
    description:
      "Relie deux noms et indique notamment la possession ou une relation. On peut retenir la structure « A の B = B de A ».",
    examples: [
      "私の本です。 (Watashi no hon desu.) - C'est mon livre.",
      "田中さんの車です。 (Tanaka-san no kuruma desu.) - C'est la voiture de Tanaka.",
      "日本の文化です。 (Nihon no bunka desu.) - C'est la culture du Japon / la culture japonaise.",
    ],
  },

  {
    particle: "で (de)",
    romaji: "de",
    usage: "Lieu de l'action / moyen",
    description:
      "Indique où se déroule une action ou avec quel moyen elle est réalisée. Pour retenir simplement : で répond souvent à « où ? » ou « comment / avec quoi ? ».",
    examples: [
      "家で勉強します。 (Ie de benkyō shimasu.) - J'étudie à la maison.",
      "学校で日本語を勉強します。 (Gakkō de nihongo o benkyō shimasu.) - J'étudie le japonais à l'école.",
      "電車で行きます。 (Densha de ikimasu.) - Je vais en train.",
    ],
  },
];

export const particulesQuestions = [];

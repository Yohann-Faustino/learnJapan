import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";

import {
  hiraganaVoyellesQuestions,
  hiraganaVoyellesVocab,
} from "../data/hiraganaVocab/hiraganaVoyelles";

import { hiraganaKVocab } from "../data/hiraganaVocab/hiraganaConsonneK";
import { hiraganaKQuestions } from "../data/hiraganaQuestions/hiraganaConsonneKQuestions";

import {
  hiraganaSQuestions,
  hiraganaSVocab,
} from "../data/hiraganaVocab/hiraganaConsonneS";

import {
  hiraganaTQuestions,
  hiraganaTVocab,
} from "../data/hiraganaVocab/hiraganaConsonneT";

import {
  hiraganaNQuestions,
  hiraganaNVocab,
} from "../data/hiraganaVocab/hiraganaConsonneN";

import { hiraganaHVocab } from "../data/hiraganaVocab/hiraganaConsonneH";
import { hiraganaHQuestions } from "../data/hiraganaQuestions/hiraganaConsonneHQuestions";

import { hiraganaMVocab } from "../data/hiraganaVocab/hiraganaConsonneM";
import { hiraganaMQuestions } from "../data/hiraganaQuestions/hiraganaConsonneMQuestions";

import {
  hiraganaYQuestions,
  hiraganaYVocab,
} from "../data/hiraganaVocab/hiraganaConsonneY";

import {
  hiraganaRQuestions,
  hiraganaRVocab,
} from "../data/hiraganaVocab/hiraganaConsonneR";

import {
  hiraganaWQuestions,
  hiraganaWVocab,
} from "../data/hiraganaVocab/hiraganaConsonneW";

import {
  hiraganaDakutenQuestions,
  hiraganaDakutenVocab,
} from "../data/hiraganaVocab/hiraganaDakuten";

import {
  handakutenQuestions,
  handakutenVocab,
} from "../data/hiraganaVocab/hiraganaHandakuten";

import { hiraganaCombiVocab } from "../data/hiraganaVocab/hiraganaCombi";
import { hiraganaCombiQuestions } from "../data/hiraganaQuestions/hiraganaCombiQuestions";

import {
  hiraganaExceptionsQuestions,
  hiraganaExceptionsVocab,
} from "../data/hiraganaVocab/hiraganaExceptions";

type Section =
  | "voyelles"
  | "K"
  | "S"
  | "T"
  | "N"
  | "H"
  | "M"
  | "Y"
  | "R"
  | "W"
  | "Dakuten"
  | "Handakuten"
  | "Combinaisons"
  | "Exceptions";

export default function HiraganaPage() {
  const [activeSection, setActiveSection] = useState<Section>("voyelles");

  const renderMiniVocab = (
    list: { jp: string; romaji: string; fr: string }[],
  ) => (
    <div className={styles.miniVocab}>
      {list.map((item, idx) => (
        <RevealButton
          key={idx}
          japanese={item.jp}
          romaji={item.romaji}
          french={item.fr}
        />
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "voyelles":
        return (
          <>
            <h2>Prononciation des voyelles</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>あ</strong> → “a” (comme dans papa)
              </p>
              <p>
                <strong>い</strong> → “i” (comme dans ski)
              </p>
              <p>
                <strong>う</strong> → “u” (comme dans loup)
              </p>
              <p>
                <strong>え</strong> → “e” (comme dans été)
              </p>
              <p>
                <strong>お</strong> → “o” (comme dans pot)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaVoyellesVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={hiraganaVoyellesQuestions}
                title="Quiz Voyelles"
              />
            </div>
          </>
        );

      case "K":
        return (
          <>
            <h2>Prononciation de la consonne K</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>か</strong> → “ka” (comme dans kaki)
              </p>
              <p>
                <strong>き</strong> → “ki” (comme dans kilo)
              </p>
              <p>
                <strong>く</strong> → “ku” (comme dans coup)
              </p>
              <p>
                <strong>け</strong> → “ke” (comme dans képi)
              </p>
              <p>
                <strong>こ</strong> → “ko” (comme dans colis)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaKVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaKQuestions} title="Quiz Consonnes K" />
            </div>
          </>
        );

      case "S":
        return (
          <>
            <h2>Prononciation de la consonne S</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>さ</strong> → “sa” (comme dans salade)
              </p>
              <p>
                <strong>し</strong> → “shi” (comme dans chiche)
              </p>
              <p>
                <strong>す</strong> → “su” (comme dans sucre)
              </p>
              <p>
                <strong>せ</strong> → “se” (comme dans sel)
              </p>
              <p>
                <strong>そ</strong> → “so” (comme dans salon)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaSVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaSQuestions} title="Quiz Consonnes S" />
            </div>
          </>
        );

      case "T":
        return (
          <>
            <h2>Prononciation de la consonne T</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>た</strong> → “ta” (comme dans tasse)
              </p>
              <p>
                <strong>ち</strong> → “chi” (comme dans tchèque)
              </p>
              <p>
                <strong>つ</strong> → “tsu” (comme dans tsunami)
              </p>
              <p>
                <strong>て</strong> → “te” (comme dans terre)
              </p>
              <p>
                <strong>と</strong> → “to” (comme dans tonne)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaTVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaTQuestions} title="Quiz Consonnes T" />
            </div>
          </>
        );

      case "N":
        return (
          <>
            <h2>Prononciation de la consonne N</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>な</strong> → “na” (comme dans nature)
              </p>
              <p>
                <strong>に</strong> → “ni” (comme dans niche)
              </p>
              <p>
                <strong>ぬ</strong> → “nu” (comme dans nuage)
              </p>
              <p>
                <strong>ね</strong> → “ne” (comme dans net)
              </p>
              <p>
                <strong>の</strong> → “no” (comme dans note)
              </p>
              <p>
                <strong>ん</strong> → “n” (comme la lettre N)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaNVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaNQuestions} title="Quiz Consonnes N" />
            </div>
          </>
        );

      case "H":
        return (
          <>
            <h2>Prononciation de la consonne H</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>は</strong> → “ha” (comme dans haleine)
              </p>
              <p>
                <strong>ひ</strong> → “hi” (comme dans histoire)
              </p>
              <p>
                <p>
                  <strong>ふ</strong> → “fu” (comme le début de "houhou")
                </p>
              </p>
              <p>
                <strong>へ</strong> → “he” (comme dans héros)
              </p>
              <p>
                <strong>ほ</strong> → “ho” (comme dans hôtel)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaHVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaHQuestions} title="Quiz Consonnes H" />
            </div>
          </>
        );

      case "M":
        return (
          <>
            <h2>Prononciation de la consonne M</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ま</strong> → “ma” (comme dans maman)
              </p>
              <p>
                <strong>み</strong> → “mi” (comme dans mile)
              </p>
              <p>
                <strong>む</strong> → “mu” (comme dans mule)
              </p>
              <p>
                <strong>め</strong> → “me” (comme dans métier)
              </p>
              <p>
                <strong>も</strong> → “mo” (comme dans mobile)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaMVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaMQuestions} title="Quiz Consonnes M" />
            </div>
          </>
        );

      case "Y":
        return (
          <>
            <h2>Prononciation de la consonne Y</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>や</strong> → “ya” (comme dans yacht)
              </p>
              <p>
                <strong>ゆ</strong> → “yu” (comme dans youpin)
              </p>
              <p>
                <strong>よ</strong> → “yo” (comme dans yoga)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaYVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaYQuestions} title="Quiz Consonnes Y" />
            </div>
          </>
        );

      case "R":
        return (
          <>
            <h2>Prononciation de la consonne R</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ら</strong> → “ra” (comme dans radar)
              </p>
              <p>
                <strong>り</strong> → “ri” (comme dans rideau)
              </p>
              <p>
                <strong>る</strong> → “ru” (comme dans ruse)
              </p>
              <p>
                <strong>れ</strong> → “re” (comme dans relais)
              </p>
              <p>
                <strong>ろ</strong> → “ro” (comme dans robot)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaRVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaRQuestions} title="Quiz Consonnes R" />
            </div>
          </>
        );

      case "W":
        return (
          <>
            <h2>Prononciation de la consonne W</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>わ</strong> → “wa” (comme dans wagon)
              </p>
              <p>
                <strong>を</strong> → “wo” (utilisé comme particule, prononcé
                “o”)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaWVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaWQuestions} title="Quiz Consonnes W" />
            </div>
          </>
        );

      case "Dakuten":
        return (
          <>
            <h2>Les Dakuten (゛)</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>Règle</strong> : Deux petits traits (゛) changent la
                prononciation d'une consonne sourde en consonne sonore.
              </p>

              <p>
                <strong>Série K → G :</strong>
              </p>
              <p>
                <strong>かきくけこ</strong> → <strong>がぎぐげご</strong>
                <br />
                "k" devient "g" (comme dans gare, guide, gum, guêpe, gorge)
              </p>

              <p>
                <strong>Série S → Z :</strong>
              </p>
              <p>
                <strong>さしすせそ</strong> → <strong>ざじずぜぞ</strong>
                <br />
                "s" devient "z" (zèbre, zone)
                <br />• し (shi) → じ (ji) - prononcé "ji" comme dans "djembé"
              </p>

              <p>
                <strong>Série T → D :</strong>
              </p>
              <p>
                <strong>たちつてと</strong> → <strong>だぢづでど</strong>
                <br />
                "t" devient "d" (date, dé, dommage)
                <br />• ち (chi) → ぢ (ji) - très rare, souvent remplacé par じ
                <br />• つ (tsu) → づ (zu) - très rare, souvent remplacé par ず
              </p>

              <p>
                <strong>Série H → B :</strong>
              </p>
              <p>
                <strong>はひふへほ</strong> → <strong>ばびぶべぼ</strong>
                <br />
                "h" devient "b" (bateau, bise, bulle, berceau, bol)
              </p>
            </div>

            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaDakutenVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={hiraganaDakutenQuestions} title="Quiz Dakuten" />
            </div>
          </>
        );

      case "Handakuten":
        return (
          <>
            <h2>Les Handakuten (゜)</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>Règle</strong> : Un petit cercle (゜) change la
                prononciation de la série H en "P".
              </p>

              <p>
                <strong>はひふへほ</strong> → <strong>ぱぴぷぺぽ</strong>
                <br />
                "h" devient "p" (comme dans pain, piano, pudding, pen, poche)
              </p>

              <p>
                <strong>À noter</strong> :
                <br />• Le handakuten ne s'applique{" "}
                <strong>qu'à la série H</strong>
                <br />• C'est le seul cas où un hiragana peut avoir deux marques
                diacritiques
                <br />• Beaucoup de mots avec handakuten sont des mots étrangers
                adaptés
              </p>
            </div>

            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(handakutenVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={handakutenQuestions} title="Quiz Handakuten" />
            </div>
          </>
        );

      case "Combinaisons":
        return (
          <>
            <h2>Combinaisons (きゃ, しゃ, ちょ, etc.)</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>Règle</strong> : Un hiragana de la colonne Y (や, ゆ,
                よ) en petit size combiné avec un autre hiragana.
              </p>

              <p>
                <strong>Formation</strong> :
                <br />• Base (き, し, ち, に, ひ, み, り, ぎ, じ, ぴ) + petit
                や/ゆ/よ
                <br />• Exemples : き + ゃ = きゃ (kya)
              </p>

              <p>
                <strong>Séries principales :</strong>
              </p>
              <p>
                <strong>K → KY</strong> : きゃ (kya), きゅ (kyu), きょ (kyo)
                <br />
                <strong>S → SH</strong> : しゃ (sha), しゅ (shu), しょ (sho)
                <br />
                <strong>T → CH</strong> : ちゃ (cha), ちゅ (chu), ちょ (cho)
                <br />
                <strong>N → NY</strong> : にゃ (nya), にゅ (nyu), にょ (nyo)
                <br />
                <strong>H → HY</strong> : ひゃ (hya), ひゅ (hyu), ひょ (hyo)
                <br />
                <strong>M → MY</strong> : みゃ (mya), みゅ (myu), みょ (myo)
                <br />
                <strong>R → RY</strong> : りゃ (rya), りゅ (ryu), りょ (ryo)
              </p>

              <p>
                <strong>Avec dakuten/handakuten :</strong>
                <br />• ぎゃ (gya), ぎゅ (gyu), ぎょ (gyo)
                <br />• じゃ (ja), じゅ (ju), じょ (jo)
                <br />• ぴゃ (pya), ぴゅ (pyu), ぴょ (pyo)
              </p>

              <p>
                <strong>À noter</strong> : Les combinaisons se prononcent en une
                seule syllabe, pas comme deux sons séparés (きゃ = "kya", pas
                "ki-ya").
              </p>
            </div>

            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaCombiVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={hiraganaCombiQuestions}
                title="Quiz Combinaisons"
              />
            </div>
          </>
        );

      case "Exceptions":
        return (
          <>
            <h2>Exceptions (っ, ー, etc.)</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>1. Le sokuon (っ) - Consonne doublée</strong>
              </p>
              <p>
                • Petit っ devant k, s, t, p : double la consonne suivante
                <br />• Exemples : がっこう (gakkou), きっぷ (kippu)
                <br />• Prononciation : Petite pause avant la consonne
              </p>

              <p>
                <strong>2. Le chōon (ー) - Voyelle longue</strong>
              </p>
              <p>
                • Trait horizontal qui allonge la voyelle précédente
                <br />• Exemples : ケーキ (keeki = gâteau), コーヒー (koohii =
                café)
                <br />• En hiragana : souvent écrit avec une voyelle
                supplémentaire
              </p>

              <p>
                <strong>3. Voyelles longues en hiragana</strong>
              </p>
              <p>
                • ああ = ā (あ long) : おかあさん (okaasan)
                <br />• いい = ī (い long) : おにいさん (oniisan)
                <br />• うう = ū (う long) : ゆうめい (yuumei = célèbre)
                <br />• えい = ē (え long) : せんせい (sensei)
                <br />• おお = ō (お long) : おおきい (ookii)
              </p>

              <p>
                <strong>4. Les particules (prononciation spéciale)</strong>
              </p>
              <p>
                • は (ha) → se prononce "wa" comme particule
                <br />• へ (he) → se prononce "e" comme particule
                <br />• を (wo) → se prononce "o" comme particule
              </p>

              <p>
                <strong>5. Le hiragana ん</strong>
              </p>
              <p>
                • Seul hiragana qui ne se termine pas par une voyelle
                <br />• Son nasal "n" comme dans "bonbon"
                <br />• Peut se trouver en milieu ou fin de mot : にほん (nihon)
              </p>

              <p>
                <strong>6. Les combinaisons spéciales</strong>
              </p>
              <p>
                • ちゃ, じゃ, ぴゃ, etc. : voir section "Combinaisons"
                <br />• Les petits ゃ, ゅ, ょ modifient la prononciation
              </p>
            </div>

            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(hiraganaExceptionsVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={hiraganaExceptionsQuestions}
                title="Quiz Exceptions"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>Apprentissage des Hiragana</h1>
      <div className={styles.navTabs}>
        {[
          { label: "Voyelles", key: "voyelles" },
          { label: "K", key: "K" },
          { label: "S", key: "S" },
          { label: "T", key: "T" },
          { label: "N", key: "N" },
          { label: "H", key: "H" },
          { label: "M", key: "M" },
          { label: "Y", key: "Y" },
          { label: "R", key: "R" },
          { label: "W", key: "W" },
          { label: "Dakuten", key: "Dakuten" },
          { label: "Handakuten", key: "Handakuten" },
          { label: "Combinaisons", key: "Combinaisons" },
          { label: "Exceptions", key: "Exceptions" },
        ].map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            active={activeSection === tab.key}
            onClick={() => setActiveSection(tab.key as Section)}
          />
        ))}
      </div>
      <div className="parchemin">
        <div className={styles.content}>{renderSection()}</div>
        <div className={styles.backButtonContainer}>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

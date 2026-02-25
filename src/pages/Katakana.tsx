import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";

import {
  katakanaVoyellesQuestions,
  katakanaVoyellesVocab,
} from "../data/katakana/katakanaVoyelles";

import {
  katakanaKQuestions,
  katakanaKVocab,
} from "../data/katakana/katakanaConsonneK";

import {
  katakanaSVocab,
  katakanaSQuestions,
} from "../data/katakana/katakanaConsonneS";

import {
  katakanaTQuestions,
  katakanaTVocab,
} from "../data/katakana/katakanaConsonneT";

import {
  katakanaNQuestions,
  katakanaNVocab,
} from "../data/katakana/katakanaConsonneN";

import {
  katakanaHQuestions,
  katakanaHVocab,
} from "../data/katakana/katakanaConsonneH";

import {
  katakanaMQuestions,
  katakanaMVocab,
} from "../data/katakana/katakanaConsonneM";

import {
  katakanaYQuestions,
  katakanaYVocab,
} from "../data/katakana/katakanaConsonneY";

import {
  katakanaRQuestions,
  katakanaRVocab,
} from "../data/katakana/katakanaConsonneR";

import {
  katakanaWQuestions,
  katakanaWVocab,
} from "../data/katakana/katakanaConsonneW";

import {
  katakanaDakutenQuestions,
  katakanaDakutenVocab,
} from "../data/katakana/katakanaDakuten";

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
  | "autres";

export default function KatakanaPage() {
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
                <strong>ア</strong> → “a” (comme dans papa)
              </p>
              <p>
                <strong>イ</strong> → “i” (comme dans ski)
              </p>
              <p>
                <strong>ウ</strong> → “u” (comme dans loup)
              </p>
              <p>
                <strong>エ</strong> → “e” (comme dans été)
              </p>
              <p>
                <strong>オ</strong> → “o” (comme dans pot)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaVoyellesVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={katakanaVoyellesQuestions}
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
                <strong>カ</strong> → “ka” (comme dans kaki)
              </p>
              <p>
                <strong>キ</strong> → “ki” (comme dans kilo)
              </p>
              <p>
                <strong>ク</strong> → “ku” (comme dans coup)
              </p>
              <p>
                <strong>ケ</strong> → “ke” (comme dans képi)
              </p>
              <p>
                <strong>コ</strong> → “ko” (comme dans colis)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaKVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaKQuestions} title="Quiz Consonnes K" />
            </div>
          </>
        );

      case "S":
        return (
          <>
            <h2>Prononciation de la consonne S</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>サ</strong> → “sa” (comme dans salade)
              </p>
              <p>
                <strong>シ</strong> → “shi” (comme dans chiche)
              </p>
              <p>
                <strong>ス</strong> → “su” (comme dans sucre)
              </p>
              <p>
                <strong>セ</strong> → “se” (comme dans sel)
              </p>
              <p>
                <strong>ソ</strong> → “so” (comme dans salon)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaSVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaSQuestions} title="Quiz Consonnes S" />
            </div>
          </>
        );

      case "T":
        return (
          <>
            <h2>Prononciation de la consonne T</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>タ</strong> → “ta” (comme dans tasse)
              </p>
              <p>
                <strong>チ</strong> → “chi” (comme dans tchèque)
              </p>
              <p>
                <strong>ツ</strong> → “tsu” (comme dans tsunami)
              </p>
              <p>
                <strong>テ</strong> → “te” (comme dans terre)
              </p>
              <p>
                <strong>ト</strong> → “to” (comme dans tonne)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaTVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaTQuestions} title="Quiz Consonnes T" />
            </div>
          </>
        );

      case "N":
        return (
          <>
            <h2>Prononciation de la consonne N</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ナ</strong> → “na” (comme dans nature)
              </p>
              <p>
                <strong>ニ</strong> → “ni” (comme dans niche)
              </p>
              <p>
                <strong>ヌ</strong> → “nu” (comme dans nuage)
              </p>
              <p>
                <strong>ネ</strong> → “ne” (comme dans net)
              </p>
              <p>
                <strong>ノ</strong> → “no” (comme dans note)
              </p>
              <p>
                <strong>ン</strong> → “n” (comme la lettre N)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaNVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaNQuestions} title="Quiz Consonnes N" />
            </div>
          </>
        );

      case "H":
        return (
          <>
            <h2>Prononciation de la consonne H</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ハ</strong> → “ha” (comme dans haleine)
              </p>
              <p>
                <strong>ヒ</strong> → “hi” (comme dans histoire)
              </p>
              <p>
                <strong>フ</strong> → “fu” (comme le début de "houhou")
              </p>
              <p>
                <strong>ヘ</strong> → “he” (comme dans héros)
              </p>
              <p>
                <strong>ホ</strong> → “ho” (comme dans hôtel)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaHVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaHQuestions} title="Quiz Consonnes H" />
            </div>
          </>
        );

      case "M":
        return (
          <>
            <h2>Prononciation de la consonne M</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>マ</strong> → “ma” (comme dans maman)
              </p>
              <p>
                <strong>ミ</strong> → “mi” (comme dans mile)
              </p>
              <p>
                <strong>ム</strong> → “mu” (comme dans mule)
              </p>
              <p>
                <strong>メ</strong> → “me” (comme dans métier)
              </p>
              <p>
                <strong>モ</strong> → “mo” (comme dans mobile)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaMVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaMQuestions} title="Quiz Consonnes M" />
            </div>
          </>
        );

      case "Y":
        return (
          <>
            <h2>Prononciation de la consonne Y</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ヤ</strong> → “ya” (comme dans yacht)
              </p>
              <p>
                <strong>ユ</strong> → “yu” (comme dans youpin)
              </p>
              <p>
                <strong>ヨ</strong> → “yo” (comme dans yoga)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaYVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaYQuestions} title="Quiz Consonnes Y" />
            </div>
          </>
        );

      case "R":
        return (
          <>
            <h2>Prononciation de la consonne R</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ラ</strong> → “ra” (comme dans radar)
              </p>
              <p>
                <strong>リ</strong> → “ri” (comme dans rideau)
              </p>
              <p>
                <strong>ル</strong> → “ru” (comme dans ruse)
              </p>
              <p>
                <strong>レ</strong> → “re” (comme dans relais)
              </p>
              <p>
                <strong>ロ</strong> → “ro” (comme dans robot)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaRVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaRQuestions} title="Quiz Consonnes R" />
            </div>
          </>
        );

      case "W":
        return (
          <>
            <h2>Prononciation de la consonne W</h2>
            <div className={styles.pronunciation}>
              <p>
                <strong>ワ</strong> → “wa” (comme dans wagon)
              </p>
              <p>
                <strong>ヲ</strong> → “wo” (utilisé comme particule, prononcé
                “o”)
              </p>
              <p>
                <strong>ン</strong> → “n” (seule consonne seule, comme la lettre
                N)
              </p>
              <p>
                <strong>ん</strong> → “n” (comme la lettre N)
              </p>
            </div>
            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaWVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaWQuestions} title="Quiz Consonnes W" />
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
                <strong>カキクケコ</strong> → <strong>ガギグゲゴ</strong>
                <br />
                "k" devient "g" (comme dans gare, guide, gum, guêpe, gorge)
              </p>

              <p>
                <strong>Série S → Z :</strong>
              </p>
              <p>
                <strong>サシスセソ</strong> → <strong>ザジズゼゾ</strong>
                <br />
                "s" devient "z" (zèbre, zone)
                <br />• シ (shi) → ジ (ji) - prononcé "ji" comme dans "djembé"
              </p>

              <p>
                <strong>Série T → D :</strong>
              </p>
              <p>
                <strong>タチツテト</strong> → <strong>ダヂヅデド</strong>
                <br />
                "t" devient "d" (date, dé, dommage)
                <br />• チ (chi) → ヂ (ji) - très rare, souvent remplacé par ジ
                <br />• ツ (tsu) → ヅ (zu) - très rare, souvent remplacé par ズ
              </p>

              <p>
                <strong>Série H → B :</strong>
              </p>
              <p>
                <strong>ハヒフヘホ</strong> → <strong>バビブベボ</strong>
                <br />
                "h" devient "b" (bateau, bise, bulle, berceau, bol)
              </p>
            </div>

            <h3>Mini-vocabulaire</h3>
            {renderMiniVocab(katakanaDakutenVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={katakanaDakutenQuestions} title="Quiz Dakuten" />
            </div>
          </>
        );

      case "autres":
        return (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <h3>Section en construction</h3>
            <p>Cette section sera bientôt disponible !</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>Apprentissage des Katakana</h1>
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
          { label: "autres", key: "autres" },
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

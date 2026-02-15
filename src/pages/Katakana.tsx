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
      case "H":
      case "M":
      case "Y":
      case "R":
      case "W":
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

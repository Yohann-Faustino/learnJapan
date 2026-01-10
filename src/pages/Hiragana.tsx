// pages/Hiragana.tsx
import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";

import {
  hiraganaVoyellesQuestions,
  hiraganaVoyellesVocab,
} from "../data/hiraganaVoyelles";

import { hiraganaKQuestions, hiraganaKVocab } from "../data/hiraganaConsonneK";
import { hiraganaSQuestions, hiraganaSVocab } from "../data/hiraganaConsonneS";
import { hiraganaTQuestions, hiraganaTVocab } from "../data/hiraganaConsonneT";
import { hiraganaNQuestions, hiraganaNVocab } from "../data/hiraganaConsonneN";
import { hiraganaHQuestions, hiraganaHVocab } from "../data/hiraganaConsonneH";
import { hiraganaMQuestions, hiraganaMVocab } from "../data/hiraganaConsonneM";
import { hiraganaYQuestions, hiraganaYVocab } from "../data/hiraganaConsonneY";
import { hiraganaRQuestions, hiraganaRVocab } from "../data/hiraganaConsonneR";
import { hiraganaWQuestions, hiraganaWVocab } from "../data/hiraganaConsonneW";
import { dakutenQuestions, dakutenVocab } from "../data/dakuten";
import { handakutenQuestions, handakutenVocab } from "../data/handakuten";
import {
  hiraganaCombiQuestions,
  hiraganaCombiVocab,
} from "../data/hiraganaCombi";
import {
  hiraganaExceptionsQuestions,
  hiraganaExceptionsVocab,
} from "../data/hiraganaExceptions";

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
    list: { jp: string; romaji: string; fr: string }[]
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
            <p>Cour...</p>
            {renderMiniVocab(dakutenVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={dakutenQuestions} title="Quiz dakuten" />
            </div>
          </>
        );

      case "Handakuten":
        return (
          <>
            <h2>Les Handakuten (゜)</h2>
            <p>Cour...</p>
            {renderMiniVocab(handakutenVocab)}
            <div className={styles.miniQuiz}>
              <Quiz questions={handakutenQuestions} title="Quiz handakuten" />
            </div>
          </>
        );

      case "Combinaisons":
        return (
          <>
            <h2>Combinaisons (きゃ, しゃ, etc.)</h2>;<p>Cour...</p>
            {renderMiniVocab(hiraganaCombiVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={hiraganaCombiQuestions}
                title="Quiz combinaisons"
              />
            </div>
          </>
        );
      case "Exceptions":
        return (
          <>
            <h2>Exceptions (っ, ー, etc.)</h2>;<p>Cour...</p>
            {renderMiniVocab(hiraganaExceptionsVocab)}
            <div className={styles.miniQuiz}>
              <Quiz
                questions={hiraganaExceptionsQuestions}
                title="Quiz exceptions"
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

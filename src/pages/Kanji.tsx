import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";
import { kanjiCatalogue } from "../data/catalogues/kanjiCatalogue";
import ScoreDisplay from "../components/ScoreDisplay";

export default function KanjiPage() {
  const [activeSection, setActiveSection] = useState(kanjiCatalogue[0].id);
  const currentSection = kanjiCatalogue.find((s) => s.id === activeSection)!;

  const renderVocab = () => (
    <div className={styles.miniVocab}>
      {currentSection.vocab.map((item, idx) => (
        <RevealButton
          key={idx}
          japanese={item.kanji}
          romaji={item.lecture}
          french={item.sens}
        />
      ))}
    </div>
  );

  const renderDescription = () => (
    <div className={styles.pronunciation}>
      <p>
        <strong>{currentSection.description}</strong>
      </p>
      <p>💡 Astuce : Les kanji ont deux lectures :</p>
      <ul>
        <li>
          <strong>On'yomi</strong> : lecture d'origine chinoise
        </li>
        <li>
          <strong>Kun'yomi</strong> : lecture japonaise native
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>📖 Kanji japonais</h1>

      <div className={styles.navTabs}>
        {kanjiCatalogue.map((section) => (
          <TabButton
            key={section.id}
            label={section.label}
            active={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          />
        ))}
      </div>

      <div className="parchemin">
        <div className={styles.content}>
          <h2>{currentSection.label}</h2>
          {renderDescription()}

          <h3>Mini-vocabulaire</h3>
          {renderVocab()}

          {/* AFFICHAGE DES SCORES */}
          <ScoreDisplay category="kanji" subCategory={currentSection.id} />

          <div className={styles.miniQuiz}>
            <Quiz
              questions={currentSection.questions}
              title={`Quiz ${currentSection.label}`}
              category="kanji"
              subCategory={currentSection.id}
            />
          </div>
        </div>

        <div className={styles.backButtonContainer}>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

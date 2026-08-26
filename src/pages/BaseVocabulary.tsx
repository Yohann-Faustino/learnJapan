// On factorise le code pour qu'il lise le catalogue au lieu de garder les switchs cases

import { useState } from "react";
import Quiz from "../components/Quiz";
import FrenchRevealButton from "../components/FrenchRevealButton";
import TabButton from "../components/TabButton";
import styles from "./BaseVocabulary.module.css";
import { baseVocabCatalogue } from "../data/catalogues/baseVocabCatalogue";
import ScoreDisplay from "../components/ScoreDisplay";
import ParcheminLayout from "../components/ParcheminLayout";

export default function BaseVocabularyPage() {
  const [activeSection, setActiveSection] = useState(baseVocabCatalogue[0].id);
  const currentSection = baseVocabCatalogue.find(
    (s) => s.id === activeSection,
  )!;

  const renderMiniVocab = () => (
    <div className={styles.miniVocab}>
      {currentSection.vocab.map((item, idx) => (
        <FrenchRevealButton
          key={`${currentSection.id}-${idx}`}
          french={item.french}
          romaji={item.romaji}
          pronunciation={item.pronunciation}
        />
      ))}
    </div>
  );

  return (
    <ParcheminLayout title="📚 Vocabulaire de Base">
      <div className="navTabs">
        {baseVocabCatalogue.map((section) => (
          <TabButton
            key={section.id}
            label={section.label}
            active={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          />
        ))}
      </div>

      <div className={styles.content}>
        <h2>{currentSection.label}</h2>
        <div className={styles.cours}>
          <p>{currentSection.description}</p>
          <p>
            <strong>Phrase utile</strong> : {currentSection.phraseUtile}
          </p>
          {currentSection.astuce && (
            <p>
              <strong>Astuce</strong> : {currentSection.astuce}
            </p>
          )}
        </div>

        <h3>Vocabulaire</h3>
        {renderMiniVocab()}

        {/* AFFICHAGE DES SCORES */}
        <ScoreDisplay category="vocabulaire" subCategory={currentSection.id} />

        <div className={styles.miniQuiz}>
          <Quiz
            key={currentSection.id}
            questions={currentSection.questions}
            title={`Quiz ${currentSection.label}`}
            category="vocabulaire"
            subCategory={currentSection.id}
          />
        </div>
      </div>
    </ParcheminLayout>
  );
}

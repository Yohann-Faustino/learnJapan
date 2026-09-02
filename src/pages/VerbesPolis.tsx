import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import FrenchRevealButton from "../components/FrenchRevealButton";
import ParcheminLayout from "../components/ParcheminLayout";
import ScoreDisplay from "../components/ScoreDisplay";
import styles from "./Hiragana.module.css";
import { verbesPolisCatalogue } from "../data/catalogues/verbesPolisCatalogue";

export default function VerbesPolisPage() {
  const [activeSection, setActiveSection] = useState(
    verbesPolisCatalogue[0].id,
  );
  const currentSection = verbesPolisCatalogue.find(
    (s) => s.id === activeSection,
  )!;

  const renderDescription = () => (
    <div className={styles.pronunciation}>
      <p>
        <strong>{currentSection.description}</strong>
      </p>
      <p>{currentSection.regle}</p>
      {currentSection.exemples && (
        <div>
          <p>
            <strong>Exemples :</strong>
          </p>
          {currentSection.exemples.map((ex, idx) => (
            <p key={idx}>
              {ex.base} → {ex.forme} ({ex.romaji})
            </p>
          ))}
        </div>
      )}
    </div>
  );

  const renderVocab = () => (
    <div className={styles.miniVocab}>
      {currentSection.vocab.map((item, idx) => (
        <FrenchRevealButton
          key={`${currentSection.id}-${idx}`}
          french={item.french}
          romaji={`${item.infinitif} → ${item.poli}`}
          pronunciation={item.pronunciation}
        />
      ))}
    </div>
  );

  return (
    <ParcheminLayout title="📖 Verbes polis">
      <div className="navTabs">
        {verbesPolisCatalogue.map((section) => (
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
        {renderDescription()}

        <h3>Mini-vocabulaire</h3>
        {renderVocab()}

        <ScoreDisplay category="verbes" subCategory={currentSection.id} />

        <div className={styles.miniQuiz}>
          <Quiz
            key={currentSection.id}
            questions={currentSection.questions}
            title={`Quiz ${currentSection.label}`}
            category="verbes"
            subCategory={currentSection.id}
          />
        </div>
      </div>
    </ParcheminLayout>
  );
}

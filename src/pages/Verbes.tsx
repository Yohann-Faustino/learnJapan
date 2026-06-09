import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";
import { verbesCatalogue } from "../data/catalogues/verbesCatalogue";
import FrenchRevealButton from "../components/FrenchRevealButton";

export default function VerbesPage() {
  const [activeSection, setActiveSection] = useState(verbesCatalogue[0].id);
  const currentSection = verbesCatalogue.find((s) => s.id === activeSection)!;

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
      {(
        currentSection.vocab as {
          french: string;
          romaji: string;
          pronunciation: string;
        }[]
      ).map((item, idx) => (
        <FrenchRevealButton
          key={idx}
          french={item.french}
          romaji={item.romaji}
          pronunciation={item.pronunciation}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>📖 Verbes japonais</h1>

      <div className={styles.navTabs}>
        {verbesCatalogue.map((section) => (
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

          <div className={styles.miniQuiz}>
            <Quiz
              questions={currentSection.questions}
              title={`Quiz ${currentSection.label}`}
              category="verbes"
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

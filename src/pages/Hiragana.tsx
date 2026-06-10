// On factorise le code pour qu'il lise le catalogue au lieu de garder les switchs cases

import { useState } from "react";
import Quiz from "../components/Quiz";
import TabButton from "../components/TabButton";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import styles from "./Hiragana.module.css";
import { hiraganaCatalogue } from "../data/catalogues/hiraganaCatalogue";
import { getBestScore, getLastScore } from "../services/progressService";

export default function HiraganaPage() {
  const [activeSection, setActiveSection] = useState(hiraganaCatalogue[0].id);
  const currentSection = hiraganaCatalogue.find((s) => s.id === activeSection)!;
  const lastScore = getLastScore("hiragana", currentSection.id);
  const bestScore = getBestScore("hiragana", currentSection.id);

  const renderPronunciation = () => (
    <div className={styles.pronunciation}>
      {currentSection.caracteres.map((c, idx) => (
        <p key={idx}>
          <strong>{c.char}</strong> → “{c.romaji}” (comme dans {c.exemple})
        </p>
      ))}
    </div>
  );

  const renderVocab = () => (
    <div className={styles.miniVocab}>
      {currentSection.vocab.map((item, idx) => (
        <RevealButton
          key={idx}
          japanese={item.jp}
          romaji={item.romaji}
          french={item.fr}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>Apprentissage des Hiragana</h1>

      <div className={styles.navTabs}>
        {hiraganaCatalogue.map((section) => (
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
          {renderPronunciation()}

          <h3>Mini-vocabulaire</h3>
          {renderVocab()}

          {/* AFFICHAGE DES SCORES */}
          {lastScore !== null && (
            <div className={styles.scoreDisplay}>
              <p>
                📊 Dernier score : {lastScore}% | Meilleur : {bestScore}%
              </p>
            </div>
          )}

          <div className={styles.miniQuiz}>
            <Quiz
              questions={currentSection.questions}
              title={`Quiz ${currentSection.label}`}
              category="hiragana"
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

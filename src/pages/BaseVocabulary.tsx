// pages/BaseVocabulary.tsx
import { useState } from "react";
import Quiz from "../components/Quiz";
import RevealButton from "../components/RevealButton";
import BackButton from "../components/BackButton";
import TabButton from "../components/TabButton";
import styles from "./BaseVocabulary.module.css";

import {
  survieVocab,
  survieQuestions,
} from "../data/baseVocabularyData/vocabSurvie";
import {
  nourritureVocab,
  nourritureQuestions,
} from "../data/baseVocabularyData/vocabNourriture";
import {
  transportVocab,
  transportQuestions,
} from "../data/baseVocabularyData/vocabTransport";
import {
  cultureVocab,
  cultureQuestions,
} from "../data/baseVocabularyData/vocabCulture";

type Section = "survie" | "nourriture" | "transport" | "culture";

export default function BaseVocabularyPage() {
  const [activeSection, setActiveSection] = useState<Section>("survie");

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
      case "survie":
        return (
          <>
            <h2>📍 Mots de Survie</h2>
            <div className={styles.cours}>
              <p>
                Les <strong>20 mots les plus essentiels</strong> pour vos
                premiers échanges.
              </p>
              <p>Mémorisez ces bases avant tout le reste !</p>
            </div>

            <h3>Vocabulaire de survie</h3>
            {renderMiniVocab(survieVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={survieQuestions} title="Quiz Survie" />
            </div>
          </>
        );

      case "nourriture":
        return (
          <>
            <h2>🍣 Nourriture & Restaurants</h2>
            <div className={styles.cours}>
              <p>Pour commander, lire un menu et exprimer vos goûts.</p>
              <p>
                <strong>Phrase utile</strong> : ____ を ください (____ s'il vous
                plaît)
              </p>
            </div>

            <h3>Vocabulaire alimentaire</h3>
            {renderMiniVocab(nourritureVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={nourritureQuestions} title="Quiz Nourriture" />
            </div>
          </>
        );

      case "transport":
        return (
          <>
            <h2>🚄 Transports & Directions</h2>
            <div className={styles.cours}>
              <p>
                Pour prendre le train, demander son chemin et lire les panneaux.
              </p>
              <p>
                <strong>Phrase utile</strong> : ____ は どこですか？ (Où est
                ____ ?)
              </p>
            </div>

            <h3>Vocabulaire transport</h3>
            {renderMiniVocab(transportVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={transportQuestions} title="Quiz Transport" />
            </div>
          </>
        );

      case "culture":
        return (
          <>
            <h2>🏯 Culture & Visites</h2>
            <div className={styles.cours}>
              <p>
                Pour visiter temples, comprendre la culture et faire des achats.
              </p>
              <p>Des mots qui rendront votre voyage plus riche !</p>
            </div>

            <h3>Vocabulaire culturel</h3>
            {renderMiniVocab(cultureVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={cultureQuestions} title="Quiz Culture" />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.parchemin}>
      <h1 className={styles.title}>Vocabulaire de Base</h1>

      <div className={styles.navTabs}>
        {[
          { label: "📍 Survie", key: "survie" },
          { label: "🍣 Nourriture", key: "nourriture" },
          { label: "🚄 Transport", key: "transport" },
          { label: "🏯 Culture", key: "culture" },
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

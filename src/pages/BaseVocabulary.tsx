// pages/BaseVocabulary.tsx
import { useState } from "react";
import Quiz from "../components/Quiz";
import FrenchRevealButton from "../components/FrenchRevealButton";
import BackButton from "../components/BackButton";
import TabButton from "../components/TabButton";
import styles from "./BaseVocabulary.module.css";

import {
  salutationsVocab,
  salutationsQuestions,
} from "../data/baseVocabularyData/vocabSalutations";
import {
  nourritureVocab,
  nourritureQuestions,
} from "../data/baseVocabularyData/vocabNourriture";
import {
  transportVocab,
  transportQuestions,
} from "../data/baseVocabularyData/vocabTransport";
import {
  achatsVocab,
  achatsQuestions,
} from "../data/baseVocabularyData/vocabAchats";

import {
  santeVocab,
  santeQuestions,
} from "../data/baseVocabularyData/vocabSante";
import {
  quotidienVocab,
  quotidienQuestions,
} from "../data/baseVocabularyData/vocabQuotidien";

import {
  grammaireVocab,
  grammaireQuestions,
} from "../data/baseVocabularyData/vocabGrammaire";

import {
  questionsVocab,
  questionsQuestions,
} from "../data/baseVocabularyData/vocabQuestions";

type Section =
  | "quotidien"
  | "salutations"
  | "questions"
  | "nourriture"
  | "transport"
  | "achats"
  | "santé"
  | "grammaire";

export default function BaseVocabularyPage() {
  const [activeSection, setActiveSection] = useState<Section>("salutations");

  const renderMiniVocab = (
    list: { french: string; romaji: string; pronunciation: string }[],
  ) => (
    <div className={styles.miniVocab}>
      {list.map((item, idx) => (
        <FrenchRevealButton
          key={idx}
          french={item.french}
          romaji={item.romaji}
          pronunciation={item.pronunciation}
        />
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "quotidien":
        return (
          <>
            <h2>🏠 Quotidien </h2>
            <div className={styles.cours}>
              <p>
                "Les objets et situations de la vie de tous les jours au Japon.
                Essentiel pour décrire votre environnement."
              </p>

              <p>
                <strong>Phrase utile </strong>: ここは [lieu] です (Ici c'est
                [lieu])
              </p>
            </div>

            <h3>Vocabulaire du quotidien</h3>
            {renderMiniVocab(quotidienVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={quotidienQuestions} title="Quiz Quotidien" />
            </div>
          </>
        );

      case "salutations":
        return (
          <>
            <h2>🏯 Salutations & Politesse</h2>
            <div className={styles.cours}>
              <p>
                Les bases essentielles pour saluer, remercier et s'excuser au
                Japon.
              </p>
              <p>
                <strong>Phrase utile</strong> : はじめまして、[nom] です
                (Enchanté, je m'appelle [nom])
              </p>
              <p>
                <strong>Astuce</strong> : Utilisez "sumimasen" pour attirer
                l'attention poliment.
              </p>
            </div>

            <h3>Vocabulaire des salutations</h3>
            {renderMiniVocab(salutationsVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={salutationsQuestions} title="Quiz Salutations" />
            </div>
          </>
        );

      case "questions":
        return (
          <>
            <h2>❓ Questions</h2>
            <div className={styles.cours}>
              <p>
                "Apprenez à poser des questions simples. La clé pour obtenir des
                informations et communiquer efficacement."
              </p>
              <p>
                <strong>Phrase utile</strong>: [mot] は なんですか？ (Qu'est-ce
                que [mot] ?)
              </p>
            </div>

            <h3>Vocabulaire du questionnement</h3>
            {renderMiniVocab(questionsVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={questionsQuestions} title="Quiz Questions" />
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

      case "achats":
        return (
          <>
            <h2>💸 Achats & Argent</h2>
            <div className={styles.cours}>
              <p>
                "Pour faire des courses, négocier les prix et comprendre les
                transactions. Indispensable pour tout achat."
              </p>
              <p>
                <strong>Phrase utile</strong>: いくらですか？ (C'est combien ?)
              </p>
            </div>

            <h3>Vocabulaire des transactions</h3>
            {renderMiniVocab(achatsVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={achatsQuestions} title="Quiz Achats" />
            </div>
          </>
        );

      case "sante":
        return (
          <>
            <h2>⚕️ Santé</h2>
            <div className={styles.cours}>
              <p>
                "Exprimer des problèmes médicaux, trouver de l'aide et décrire
                des symptômes. Pour votre sécurité."
              </p>
              <p>
                <strong>Phrase utile</strong>: びょういんは どこですか？ (Où est
                l'hôpital ?)
              </p>
            </div>

            <h3>Vocabulaire sanitaire</h3>
            {renderMiniVocab(santeVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={santeQuestions} title="Quiz Santé" />
            </div>
          </>
        );

      case "grammaire":
        return (
          <>
            <h2>🈴 Grammaire</h2>
            <div className={styles.cours}>
              <p>
                "Les petits mots qui relient les phrases. Essentiel pour parler
                de manière naturelle et fluide."
              </p>
              <p>
                <strong>Phrase utile</strong>: [A] と [B] (A et B)
              </p>
            </div>

            <h3>Vocabulaire culturel</h3>
            {renderMiniVocab(grammaireVocab)}

            <div className={styles.miniQuiz}>
              <Quiz questions={grammaireQuestions} title="Quiz Grammaire" />
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
          { label: "🏠 Quotidien", key: "quotidien" },
          { label: "🏯 Salutations", key: "salutations" },
          { label: "❓ Questions", key: "questions" },
          { label: "🍣 Nourriture", key: "nourriture" },
          { label: "🚄 Transport", key: "transport" },
          { label: "💸 Achats", key: "achats" },
          { label: "⚕️ Santé", key: "sante" },
          { label: "🈴 Grammaire", key: "grammaire" },
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

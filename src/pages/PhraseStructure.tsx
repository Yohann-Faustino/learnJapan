import styles from "./Hiragana.module.css";
import ParcheminLayout from "../components/ParcheminLayout";

export default function PhraseStructurePage() {
  return (
    <ParcheminLayout title="📖 Structure des phrases japonaises">
      <div className={styles.content}>
        <h2>🎯 Introduction</h2>
        <div className={styles.pronunciation}>
          <p>
            Le japonais est très différent du français. L'ordre des mots, les
            marqueurs grammaticaux et la logique de construction sont uniques.
          </p>
          <p>
            <strong>Règle d'or</strong> : Le verbe est TOUJOURS à la fin de la
            phrase !
          </p>
        </div>

        <h2>📋 Ordre des mots de base</h2>
        <div className={styles.pronunciation}>
          <p>
            <strong>Français</strong> : Sujet + Verbe + Complément
            <br />
            Ex: Je + mange + des sushis
          </p>
          <p>
            <strong>Japonais</strong> : Sujet + Complément + Verbe
            <br />
            Ex: Watashi + sushi o + tabemasu
          </p>
        </div>

        <h2>🔑 Les particules essentielles</h2>
        <div className={styles.pronunciation}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Particule
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Rôle
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Exemple
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <strong>wa</strong> (は)
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Marqueur de thème
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Watashi wa gakusei (Je suis étudiant)
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <strong>ga</strong> (が)
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Marqueur de sujet
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Neko ga suki (J'aime les chats)
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <strong>o</strong> (を)
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Objet direct
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Sushi o taberu (Manger des sushis)
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <strong>ni</strong> (に)
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Destination / temps
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Gakkou ni iku (Aller à l'école)
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <strong>de</strong> (で)
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Lieu d'action
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Kouen de asobu (Jouer au parc)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>📝 Exemples concrets (tout en romaji)</h2>
        <div className={styles.pronunciation}>
          <p>
            <strong>1. Phrase affirmative simple</strong>
            <br />
            Watashi wa gakusei desu.
            <br />→ "Je suis étudiant."
          </p>
          <p>
            <strong>2. Phrase avec objet</strong>
            <br />
            Watashi wa sushi o tabemasu.
            <br />→ "Je mange des sushis."
          </p>
          <p>
            <strong>3. Phrase avec lieu</strong>
            <br />
            Watashi wa gakkou ni ikimasu.
            <br />→ "Je vais à l'école."
          </p>
          <p>
            <strong>4. Phrase négative</strong>
            <br />
            Watashi wa gakusei dewa arimasen.
            <br />→ "Je ne suis pas étudiant."
          </p>
          <p>
            <strong>5. Question</strong>
            <br />
            Anata wa gakusei desu ka?
            <br />→ "Êtes-vous étudiant ?"
          </p>
          <p>
            <strong>6. Avec un adjectif</strong>
            <br />
            Sushi wa oishii desu.
            <br />→ "Les sushis sont délicieux."
          </p>
        </div>

        <h2>💡 Points clés à retenir</h2>
        <div className={styles.pronunciation}>
          <ul>
            <li>
              <strong>Verbe à la fin</strong> - toujours, dans toutes les
              phrases
            </li>
            <li>
              <strong>Particules</strong> - indiquent la fonction des mots
              (sujet, objet, lieu)
            </li>
            <li>
              <strong>Pas de pluriel</strong> - watashi peut être "je" ou "nous"
              selon contexte
            </li>
            <li>
              <strong>Desu</strong> - mot pour "être", toujours à la fin
            </li>
            <li>
              <strong>Masu/Masen</strong> - terminaisons pour affirmatif/négatif
              poli
            </li>
            <li>
              <strong>Ka à la fin</strong> - transforme une phrase en question
            </li>
          </ul>
        </div>

        <h2>⚠️ Attention aux pièges</h2>
        <div className={styles.pronunciation}>
          <p>
            <strong>La particule wa</strong> s'écrit avec le caractère "ha" (は)
            mais se prononce "wa".
            <br />
            Ex: 私は (watashi wa) → Ne dites PAS "watashi ha" !
          </p>
          <p>
            <strong>La particule e</strong> s'écrit avec le caractère "he" (へ)
            mais se prononce "e" pour la direction.
            <br />
            Ex: 東京へ (Tokyo e) → "vers Tokyo", pas "Tokyo he" !
          </p>
        </div>
      </div>
    </ParcheminLayout>
  );
}

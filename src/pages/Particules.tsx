// On factorise le code pour qu'il lise le catalogue au lieu de garder les switchs cases

import Quiz from "../components/Quiz";
import ScoreDisplay from "../components/ScoreDisplay";
import { particulesVocab } from "../data/particulesVocab/particules";
import { particulesQuestions } from "../data/particulesQuestions/particulesQuestions";
import ParcheminLayout from "../components/ParcheminLayout";

export default function ParticlesPage() {
  return (
    <ParcheminLayout title="Cours des Particules Japonaises">
      <div style={{ textAlign: "left" }}>
        <h2>Pourquoi apprendre les particules ?</h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <p>
            Les particules japonaises sont de petits mots qui indiquent la
            fonction grammaticale des autres mots dans la phrase.
          </p>

          <p>
            Contrairement au français où l'ordre des mots est important, en
            japonais les particules permettent de comprendre le rôle de chaque
            élément dans la phrase.
          </p>

          <p>
            Il est donc important de ne pas seulement apprendre leur traduction,
            mais de comprendre leur rôle dans une phrase.
          </p>
        </div>

        <h2>Les 18 Particules Essentielles</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            margin: "1.5rem 0",
          }}
        >
          {particulesVocab.map((particle, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                textAlign: "left",
                padding: "1rem",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {particle.particle.split(" ")[0]}
                  </span>

                  <span style={{ fontSize: "0.9rem", color: "#666" }}>
                    ({particle.romaji})
                  </span>
                </div>

                <p style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                  {particle.usage}
                </p>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "0.8rem",
                  lineHeight: "1.4",
                }}
              >
                {particle.description}
              </p>

              <div style={{ fontSize: "0.85rem", padding: "0.5rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                  Exemples :
                </p>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.5rem",
                  }}
                >
                  {particle.examples.map((example, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "0.5rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "2rem 0" }}>
          <h3>Conseils</h3>

          <p>
            <strong>1. Apprenez par paires :</strong> は vs が • に vs へ • と
            vs や • から vs まで • ね vs よ • だけ vs しか
          </p>

          <p>
            <strong>2. Posez-vous la bonne question :</strong> thème ? sujet ?
            destination ? lieu de l'action ? moyen ? possession ?
          </p>

          <p>
            <strong>3. Pratiquez avec des phrases :</strong> créez vos propres
            exemples pour comprendre le rôle de chaque particule.
          </p>

          <p>
            <strong>4. Écoutez attentivement :</strong> essayez de repérer les
            particules lorsque vous écoutez du japonais.
          </p>
        </div>

        <ScoreDisplay category="grammaire" subCategory="particules" />

        <div style={{ margin: "2rem 0" }}>
          <Quiz
            key="particules"
            questions={particulesQuestions}
            category="grammaire"
            subCategory="particules"
          />
        </div>
      </div>
    </ParcheminLayout>
  );
}

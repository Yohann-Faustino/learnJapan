import Quiz from "../components/Quiz";
import BackButton from "../components/BackButton";

import {
  particulesQuestions,
  particulesVocab,
} from "../data/particules/particules";

export default function ParticlesPage() {
  return (
    <div className="parchemin">
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Cours des Particules Japonaises
      </h1>

      <div style={{ textAlign: "left" }}>
        <h2>Pourquoi apprendre les particules ?</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <p>
            Les particules japonaises sont de petits mots qui indiquent la
            fonction grammaticale des autres mots dans la phrase.
          </p>
          <p>
            Contrairement au français où l'ordre des mots est important, en
            japonais ce sont les particules qui déterminent le rôle de chaque
            élément.
          </p>
        </div>

        <h2>Les 15 Particules Essentielles</h2>
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
                {particle.examples.map((example, i) => (
                  <p key={i} style={{ marginBottom: "0.3rem" }}>
                    {example}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "2rem 0" }}>
          <h3>Conseils</h3>
          <p>
            <strong>1. Apprenez par paires</strong> : は vs が • に vs で • と
            vs や
          </p>
          <p>
            <strong>2. Pratiquez avec des phrases</strong> : Créez vos propres
            exemples
          </p>
          <p>
            <strong>3. Écoutez attentivement</strong> : Repérez les particules
            dans les conversations
          </p>
        </div>

        <div style={{ margin: "2rem 0" }}>
          <Quiz
            questions={particulesQuestions}
            category="grammaire"
            subCategory="particules"
          />
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <BackButton />
      </div>
    </div>
  );
}

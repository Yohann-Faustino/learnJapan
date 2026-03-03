import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Particules from "./pages/Particules";
import BaseVocabularyPage from "./pages/BaseVocabulary";
import PhraseStructurePage from "./pages/PhraseStructure";

function App() {
  return (
    <div className={styles.appBackground}>
      <BrowserRouter>
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Phrase */}
          <Route path="/phrase" element={<PhraseStructurePage />} />

          {/* Catégorie particules */}
          <Route path="/particules" element={<Particules />} />

          {/* Catégorie BaseVocabulary */}
          <Route path="/base" element={<BaseVocabularyPage />} />

          {/* Catégorie Hiragana */}
          <Route path="/hiragana" element={<Hiragana />} />

          {/* Catégorie Katakana */}
          <Route path="/katakana" element={<Katakana />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

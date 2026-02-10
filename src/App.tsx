import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Particules from "./pages/Particules";
import BaseVocabularyPage from "./pages/BaseVocabulary";

function App() {
  return (
    <div className={styles.appBackground}>
      <BrowserRouter>
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Catégorie Hiragana */}
          <Route path="/hiragana" element={<Hiragana />} />

          {/* Catégorie Hiragana */}
          <Route path="/katakana" element={<Katakana />} />

          {/* Catégorie BaseVocabulary */}
          <Route path="/base" element={<BaseVocabularyPage />} />

          {/* Catégorie particules */}
          <Route path="/particules" element={<Particules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

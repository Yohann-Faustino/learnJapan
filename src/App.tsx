import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Particules from "./pages/Particules";
import BaseVocabularyPage from "./pages/BaseVocabulary";
import PhraseStructurePage from "./pages/PhraseStructure";
import VerbesPolisPage from "./pages/VerbesPolis";
import Kanji from "./pages/Kanji";
import { ThemeProvider } from "./context/themeContext";
import ThemeToggle from "./components/ThemeToogle";
import ProfilPage from "./pages/Profile";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <div className={styles.appBackground}>
        <BrowserRouter>
          <Routes>
            {/* Accueil */}
            <Route path="/" element={<Home />} />

            {/* Phrase */}
            <Route path="/phrase" element={<PhraseStructurePage />} />

            {/* Catégorie Particules */}
            <Route path="/particules" element={<Particules />} />

            {/* Catégorie Verbes polis */}
            <Route path="/verbespolis" element={<VerbesPolisPage />} />

            {/* Catégorie BaseVocabulary */}
            <Route path="/base" element={<BaseVocabularyPage />} />

            {/* Catégorie Hiragana */}
            <Route path="/hiragana" element={<Hiragana />} />

            {/* Catégorie Katakana */}
            <Route path="/katakana" element={<Katakana />} />

            {/* Catégorie Kanji */}
            <Route path="/kanji" element={<Kanji />} />

            {/* Catégorie Profile */}
            <Route path="/profil" element={<ProfilPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

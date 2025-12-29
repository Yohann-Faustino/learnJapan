import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";

function App() {
  return (
    <div className={styles.appBackground}>
      <BrowserRouter>
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Catégorie Hiragana */}
          <Route path="/hiragana" element={<Hiragana />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

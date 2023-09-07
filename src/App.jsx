import { useState, useEffect } from "react";

import FighterSelectionScene from "./components/FighterSelectionScene/FighterSelectionScene.jsx";
import Header from "./components/Header/Header.jsx";

import "./App.css";
import FighterPresentaionScene from "./components/FighterPresentationScene/FighterPresentationScene.jsx";
import OneFighter from "./components/OneFighter/OneFighter.jsx";

function App() {
  const [selectedFighter, setSelectedFighter] = useState(null);

  const [hoveredFighter, setHoveredFighter] = useState(null);

  const [showFighterPresentation, setShowFighterPresentation] = useState(false);

  const handleFighterSelect = (fighter) => {
    setHoveredFighter(false);
    setSelectedFighter(fighter);
  };

  const handleFighterHover = (fighter) => {
    setHoveredFighter(fighter);
  };

  useEffect(() => {
    // Логіка переходу з екрану 1 на екран 2
    if (selectedFighter !== null) {
      setTimeout(() => {
        setShowFighterPresentation(true);
      }, 2000); // Перехід через 2 секунди
    }
  }, [selectedFighter]);

  useEffect(() => {
    // Логіка закриття екрану 2 після 4 секунд
    if (showFighterPresentation) {
      const timer = setTimeout(() => {
        setShowFighterPresentation(false);
      }, 4000); // Показ екрану 2 триває 4 секунд

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showFighterPresentation]);

  return (
    <main>
      <Header />

      {!selectedFighter && (
        <FighterSelectionScene
          onFighterSelect={handleFighterSelect}
          onFighterHover={handleFighterHover}
        />
      )}

      {hoveredFighter && (
        <OneFighter image={hoveredFighter.image} name={hoveredFighter.name} />
      )}

      {selectedFighter && (
        <FighterPresentaionScene
          image={selectedFighter.image}
          name={selectedFighter.name}
        />
      )}
    </main>
  );
}

export default App;

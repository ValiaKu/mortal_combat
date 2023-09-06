import { useState, useEffect } from "react";

import FighterSelectionScene from "./components/FighterSelectionScene/FighterSelectionScene.jsx";
import Header from "./components/Header/Header.jsx";

import useFightersList from "./hooks/useFightersList";
import "./App.css";
import FighterPresentaionScene from "./components/FighterPresentationScene/FighterPresentationScene.jsx";

function App() {
  const fighters = useFightersList();

  const [selectedFighter, setSelectedFighter] = useState(null);
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState(0);
  const [showFighterPresentation, setShowFighterPresentation] = useState(false);

  const handleFighterSelect = (fighter) => {
    setSelectedFighter(fighter);

    // Запуск таймера для переходу на другий екран через 2 секунди
    // setTimeout(() => {
    //   // Виклик функції для переходу на другий екран
    //   setShowFighterPresentation(true);
    // }, 4000);
    // return () => {
    //   clearTimeout(timeout);
    // };
    //console.log(selectedFighter.name);
  };

  // useEffect(() => {
  //   if (selectedFighter) {
  //     const timeout = setTimeout(() => {
  //       // Виклик функції для переходу на другий екран
  //       setShowFighterPresentation(true);
  //     }, 4000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [selectedFighter]);

  useEffect(() => {
    // Логіка переходу з екрану 1 на екран 2
    if (selectedFighter !== null) {
      setTimeout(() => {
        setShowFighterPresentation(true);
      }, 2000); // Перехід через 2 секунди
      console.log("Transfer 2 s");
    }
  }, [selectedFighter]);

  useEffect(() => {
    // Логіка закриття екрану 2 після 4 секунд
    if (showFighterPresentation) {
      const timer = setTimeout(() => {
        setShowFighterPresentation(false);
      }, 4000); // Показ екрану 2 триває 4 секунди
      console.log("Duration 4 s");

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showFighterPresentation]);

  return (
    <main>
      <Header />

      {!selectedFighter && (
        <FighterSelectionScene onFighterSelect={handleFighterSelect} />
      )}

      {showFighterPresentation && (
        <FighterPresentaionScene
          image={selectedFighter.image}
          name={selectedFighter.name}
        />
      )}
    </main>
  );
}

export default App;

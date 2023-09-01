import { useState } from "react";

import FighterSelectionScene from "./components/FighterSelectionScene/FighterSelectionScene.jsx";
import HeaderWithStatus from "./components/HeaderWithStatus/HeaderWithStatus.jsx";
import ResetButton from "./components/ResetButton.jsx";
import "./App.css";

function App() {
  const reset = () => console.log("reset");

  const [selectedFighter, setSelectedFighter] = useState({});

  const handleFighterSelect = (fighter) => {
    setSelectedFighter(fighter);
    console.log(selectedFighter.name);
  };

  return (
    <main>
      <HeaderWithStatus
        selectedFighterFirst={selectedFighter.name}
        selectedFighterSecond={selectedFighter.name}
      />
      <FighterSelectionScene onFighterSelect={handleFighterSelect} />
      {selectedFighter && (
        <div className='selected-fighter'>
          <h2>Selected Fighters:</h2>
          <img src={selectedFighter.image} alt={selectedFighter.name} />
          <h3>{selectedFighter.name}</h3>
        </div>
      )}

      <ResetButton reset={reset} />
    </main>
  );
}

export default App;

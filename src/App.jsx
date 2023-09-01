import { useState } from "react";

import FighterSelectionScene from "./components/FighterSelectionScene/FighterSelectionScene.jsx";
import HeaderWithStatus from "./components/HeaderWithStatus/HeaderWithStatus.jsx";
import ResetButton from "./components/ResetButton.jsx";
import "./App.css";

function App() {
  const reset = () => console.log("reset");

  const [selectedFighter, setSelectedFighter] = useState(null);

  const handleFighterSelect = (fighter) => {
    // setSelectedFighter(fighter);
    console.log(fighter);
  };

  return (
    <main>
      <HeaderWithStatus turn={0} />
      <FighterSelectionScene onFighterSelect={handleFighterSelect} />
      <div className='selected-fighter'>
        <h2>Selected Fighter:</h2>
        {/* <h3>{selectedFighter.name}</h3> */}
      </div>
      <ResetButton reset={reset} />
    </main>
  );
}

export default App;

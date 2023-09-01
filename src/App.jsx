import FighterSelectionScene from "./components/FighterSelectionScene/FighterSelectionScene.jsx";
import HeaderWithStatus from "./components/HeaderWithStatus.jsx";
import ResetButton from "./components/ResetButton.jsx";
import "./App.css";

function App() {
  const reset = () => console.log("reset");
  return (
    <main>
      <h1>Mortal Kombat v0.0.1</h1>
      <HeaderWithStatus turn={0} />
      <FighterSelectionScene />
      <ResetButton reset={reset} />
    </main>
  );
}

export default App;

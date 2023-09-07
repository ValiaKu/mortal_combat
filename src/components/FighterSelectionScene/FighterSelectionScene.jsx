import { useEffect, useState } from "react";

import clsx from "clsx";
import { v4 as uuid } from "uuid";
import styles from "../../components/FighterSelectionScene/FighterSelectionScene.module.scss";
import useFightersList from "../../hooks/useFightersList";

function FighterSelectionScene({ onFighterSelect, onFighterHover }) {
  const [selectedFighterIndex, setSelectedFighterIndex] = useState(0);

  const audioSelected = new Audio("./content/sounds/select.mp3");

  const fighters = useFightersList();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          setSelectedFighterIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : fighters.length - 1
          );
          onFighterHover(fighters[selectedFighterIndex - 1]);
          break;
        case "ArrowRight":
          setSelectedFighterIndex((prevIndex) =>
            prevIndex < fighters.length - 1 ? prevIndex + 1 : 0
          );
          onFighterHover((prevIndex) => fighters[selectedFighterIndex + 1]);
          break;
        case "ArrowUp":
          setSelectedFighterIndex((prevIndex) =>
            prevIndex < 5 ? prevIndex + 10 : prevIndex - 5
          );
          onFighterHover((prevIndex) => fighters[selectedFighterIndex - 5]);
          break;
        case "ArrowDown":
          setSelectedFighterIndex((prevIndex) =>
            prevIndex > fighters.length - 5 ? prevIndex - 10 : prevIndex + 5
          );
          onFighterHover((prevIndex) => fighters[selectedFighterIndex + 5]);
          break;
        case "Enter":
          setTimeout(() => {
            // Виклик функції для переходу на другий екран з  затримкою 2 секунди
            onFighterSelect(fighters[selectedFighterIndex]);
            audioSelected.play();
          }, 2000);

          break;

        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFighterIndex]);

  return (
    <>
      <h2>Fighters</h2>
      <div className={styles.fighterSelectionBox}>
        {fighters.map((fighter, index) => (
          <div
            key={fighter.id}
            className={clsx(styles.fighter, {
              [styles.fighterActive]: index === selectedFighterIndex,
            })}>
            <span>{fighter.name}</span>
            <img src={fighter.image} alt={fighter.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FighterSelectionScene;

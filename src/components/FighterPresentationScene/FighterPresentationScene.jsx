import styles from "./FighterPresentationScene.module.scss";
import { useEffect, useState } from "react";

function FighterPresentaionScene({ image, name }) {
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState(0);
  const symbols = ["Q", "W", "E", "R", "T", "Y"]; // Список символів

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setSelectedSymbolIndex(
        (prevIndex) => (prevIndex - 1 + symbols.length) % symbols.length
      );
    } else if (event.key === "ArrowRight") {
      setSelectedSymbolIndex((prevIndex) => (prevIndex + 1) % symbols.length);
    }
  };

  return (
    <div className={styles.root}>
      <h1>Presentation Fighters</h1>

      <div className={styles.selectedFighter}>
        <div className={styles.imgWrapper}>
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
      </div>

      <div className={styles.selectedFighter}>
        <div className={styles.imgWrapper}>
          <img src='./content/characters/scorpio.png' alt='Scorpion' />
        </div>
        <h3>Scorpion</h3>
      </div>

      <section className='buttons'>
        {symbols.map((symbol, index) => (
          <button
            key={symbol}
            className={selectedSymbolIndex === index ? "selected" : ""}
            onKeyDown={handleKeyDown}>
            {symbol}
          </button>
        ))}
      </section>
    </div>
  );
}

export default FighterPresentaionScene;

import styles from "./FighterPresentationScene.module.scss";
import { useEffect, useState } from "react";
import VersusCodeIcons from "../../components/VersusCodeIcons/VersusCodeIcons.jsx"; // Adjust the import path

function FighterPresentaionScene({ image, name }) {
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState("q");
  const symbols = [
    { id: 1, name: "q" },
    { id: 2, name: "w" },
    { id: 3, name: "e" },
    { id: 4, name: "r" },
    { id: 5, name: "t" },
    { id: 6, name: "y" },
  ];
  // Список символів

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (symbols.includes(event.key)) {
  //       setSelectedSymbolIndex(event.key);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [selectedSymbolIndex]);

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

      {/* <section className={styles.buttons}>
        {symbols.map((symbol) => (
          <button
            key={symbol.id}
            className={
              selectedSymbolIndex === symbol.name ? styles.codeSelected : ""
            }>
            {symbol.symbol}
          </button>
        ))}
      </section> */}
      <VersusCodeIcons />
    </div>
  );
}

export default FighterPresentaionScene;

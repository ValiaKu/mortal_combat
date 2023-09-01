import { useEffect } from "react";

import { v4 as uuid } from "uuid";
import styles from "./FighterSelectionScene.module.scss";

function FighterSelectionScene() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          console.log("arrow left");
          break;
        case "ArrowRight":
          console.log("arrow right");
          break;
        case "ArrowUp":
          console.log("arrow up");
          break;
        case "ArrowDown":
          console.log("arrow down");
          break;

        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const fighters = [
    {
      id: uuid(),
      name: "Scorpion",
      image: "/content/characters/scorpio.png",
    },
    {
      id: uuid(),
      name: "Sub-Zero",
      image: "/content/characters/subzero.png",
    },
    {
      id: uuid(),
      name: "Kano",
      image: "/content/characters/kano.png",
    },

    {
      id: uuid(),
      name: "Cyrex",
      image: "/content/characters/cyrex.png",
    },
    {
      id: uuid(),
      name: "Goro",
      image: "/content/characters/goro.png",
    },
    {
      id: uuid(),
      name: "Jade",
      image: "/content/characters/jade.png",
    },
    {
      id: uuid(),
      name: "Jax",
      image: "/content/characters/jax.png",
    },
    {
      id: uuid(),
      name: "Kitana",
      image: "/content/characters/kitana.png",
    },
    {
      id: uuid(),
      name: "Liu Kang",
      image: "/content/characters/liukang.png",
    },
    {
      id: uuid(),
      name: "Nightwolf",
      image: "/content/characters/nightwolf.png",
    },
    {
      id: uuid(),
      name: "Raiden",
      image: "/content/characters/raiden.png",
    },
    {
      id: uuid(),
      name: "Sonia",
      image: "/content/characters/sonia.png",
    },
    {
      id: uuid(),
      name: "Shan-Tsun",
      image: "/content/characters/shantsun.png",
    },
    {
      id: uuid(),
      name: "Sheeva",
      image: "/content/characters/sheeva.png",
    },
    {
      id: uuid(),
      name: "Sindel",
      image: "/content/characters/sindel.png",
    },
  ];

  return (
    <>
      <h2>Fighters</h2>
      <div className={styles.fighterSelectionBox}>
        {fighters.map((fighter) => (
          <div key={fighter.id} className={styles.fighter}>
            <span>{fighter.name}</span>
            <img src={fighter.image} alt={fighter.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FighterSelectionScene;

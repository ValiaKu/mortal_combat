import { v4 as uuid } from "uuid";
import { useState } from "react";

function useFightersList() {
  const [fighters] = useState([
    {
      id: uuid(),
      name: "Scorpion",
      image: "./content/characters/scorpio.png",
    },
    {
      id: uuid(),
      name: "Sub-Zero",
      image: "./content/characters/subzero.png",
    },
    {
      id: uuid(),
      name: "Kano",
      image: "./content/characters/kano.png",
    },

    {
      id: uuid(),
      name: "Cyrex",
      image: "./content/characters/cyrex.png",
    },
    {
      id: uuid(),
      name: "Goro",
      image: "./content/characters/goro.png",
    },
    {
      id: uuid(),
      name: "Jade",
      image: "./content/characters/jade.png",
    },
    {
      id: uuid(),
      name: "Jax",
      image: "./content/characters/jax.png",
    },
    {
      id: uuid(),
      name: "Kitana",
      image: "./content/characters/kitana.png",
    },
    {
      id: uuid(),
      name: "Liu Kang",
      image: "./content/characters/liukang.png",
    },
    {
      id: uuid(),
      name: "Nightwolf",
      image: "./content/characters/nightwolf.png",
    },
    {
      id: uuid(),
      name: "Raiden",
      image: "./content/characters/raiden.png",
    },
    {
      id: uuid(),
      name: "Sonia",
      image: "./content/characters/sonia.png",
    },
    {
      id: uuid(),
      name: "Shan-Tsun",
      image: "./content/characters/shantsun.png",
    },
    {
      id: uuid(),
      name: "Sheeva",
      image: "./content/characters/sheeva.png",
    },
    {
      id: uuid(),
      name: "Sindel",
      image: "./content/characters/sindel.png",
    },
  ]);

  return fighters;
}

export default useFightersList;

import styles from "./FighterPresentationScene.module.scss";

import PropTypes from "prop-types";
import VersusCodeIcons from "../../components/VersusCodeIcons/VersusCodeIcons.jsx"; // Adjust the import path

function FighterPresentaionScene({ image, name }) {
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
      <VersusCodeIcons />
    </div>
  );
}

FighterPresentaionScene.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default FighterPresentaionScene;

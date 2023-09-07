import styles from "./OneFighter.module.scss";

import PropTypes from "prop-types";

function OneFighter({ image, name }) {
  return (
    <div className={styles.hoveredFighter}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

OneFighter.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default OneFighter;

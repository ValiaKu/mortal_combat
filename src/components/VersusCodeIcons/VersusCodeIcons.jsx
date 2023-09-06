import { useState } from "react";
import clsx from "clsx";
import styles from "../../components/VersusCodeIcons/VersusCodeIcons.module.scss";

function VersusCodeIcons() {
  const symbols = ["Q", "
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState(null);

  const handleSymbolSelection = (index) => {
    setSelectedSymbolIndex(index);
   
  };

  return (
    <div className={styles.versusCodeIcons}>
      {symbols.map((symbol, index) => (
        <button
          key={symbol}
          className={clsx(symbol, {
            codeSelected: selectedSymbolIndex === index,
          })}
          onClick={() => handleSymbolSelection(index)}></button>
      ))}
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
}

export default VersusCodeIcons;

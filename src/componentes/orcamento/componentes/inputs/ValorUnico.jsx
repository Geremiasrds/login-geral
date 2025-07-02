import React, { useRef } from "react";
import styles from "../Geral.module.css";

const ValorDoItem = ({ valorDoItem, setValorDoItem, onSomar }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValorDoItem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (onSomar) {
        onSomar();
      }
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        className={styles.inputText}
        type="number"
        min="0"
        step="0.01"
        placeholder="Valor unitário (ex: 50)"
        value={valorDoItem}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ValorDoItem;

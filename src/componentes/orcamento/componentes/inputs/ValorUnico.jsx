import React, { useRef } from "react";

const ValorDoItem = ({ valorDoItem, setValorDoItem, onSomar }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValorDoItem(e.target.value);
  };

  const handleFocus = () => {
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
    <div ref={inputRef}>
      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Valor unitário (ex: 50)"
        value={valorDoItem}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ValorDoItem;

import React, { useRef } from "react";

const InputsEditaveis = ({ quantidade, nome, valorUnitario, onChange }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={{ display: "flex", padding: 0 }} ref={inputRef}>
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => onChange("quantidade", e.target.value)}
        placeholder="Qtd"
        style={{ width: 60, height: '10px', borderBottom:'1px solid black' }}
        onFocus={handleFocus}
      />
      <input
        type="text"
        value={nome}
        onChange={(e) => onChange("nome", e.target.value)}
        placeholder="Serviço"
        style={{ width: '120px', height: '10px' }}
        onFocus={handleFocus}

      />
      <input
        type="number"
        min="0"
        step="0.01"
        value={valorUnitario}
        onChange={(e) => onChange("valorUnitario", e.target.value)}
        placeholder="Valor"
        style={{ width: 80, height: '10px' }}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default InputsEditaveis;

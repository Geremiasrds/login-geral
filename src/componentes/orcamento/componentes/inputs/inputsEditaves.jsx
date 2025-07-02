import React from "react";
import styles from "../Geral.module.css";

const InputsEditaveis = ({ quantidade, nome, valorUnitario, onChange, className }) => {
  return (
    <div className={`${styles.inputsEditaveis} ${className || ""}`}>
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => onChange("quantidade", e.target.value)}
        placeholder="Qtd"
      />
      <input
        type="text"
        value={nome}
        onChange={(e) => onChange("nome", e.target.value)}
        placeholder="Serviço"
      />
      <input
        type="number"
        min="0"
        step="0.01"
        value={valorUnitario}
        onChange={(e) => onChange("valorUnitario", e.target.value)}
        placeholder="Valor"
      />
    </div>
  );
};

export default InputsEditaveis;

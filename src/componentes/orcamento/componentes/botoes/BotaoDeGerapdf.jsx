import React from "react";
import styles from "../Geral.module.css";

const BotaoDeGeraPDF = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles.botaoGerarPDF} ${className || ""}`}>
      📄 Gerar PDF
    </button>
  );
};

export default BotaoDeGeraPDF;

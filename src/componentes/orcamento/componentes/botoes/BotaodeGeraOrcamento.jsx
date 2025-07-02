import React from "react";
import styles from "../Geral.module.css";
const BotaodeGeraOrcamento = ({ onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      Gerar
    </button>
  );
};

export default BotaodeGeraOrcamento;

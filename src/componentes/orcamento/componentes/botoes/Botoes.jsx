import React from "react";
import styles from "../Geral.module.css";

const Botoes = ({ tipo, onClick, remover, gerarOrcamento, mostrarExtras }) => {
  if (tipo === "adicionar") {
    return (
      <div>
        <button className={styles.botao} onClick={onClick}>
          Adicionar
        </button>
      </div>
    );
  }

  if (tipo === "extras" && mostrarExtras) {
    return (
      <div>
        <button className={styles.botao} onClick={remover}>
          Remover
        </button>
        <button className={styles.botao} onClick={gerarOrcamento}>
          Mostar orçamento
        </button>
        
      </div>
    );
  }

  return null;
};

export default Botoes;

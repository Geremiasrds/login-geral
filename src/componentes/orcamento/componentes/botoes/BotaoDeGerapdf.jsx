import React from "react";

const BotaoDeGeraPDF = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{
      backgroundColor: "#28a745",
      color: "#fff",
    }}>
      📄 Gerar PDF
    </button>
  );
};

export default BotaoDeGeraPDF;

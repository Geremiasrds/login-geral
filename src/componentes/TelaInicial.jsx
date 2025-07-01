import React from "react";
import { Link } from "react-router-dom";

const TelaInicial = () => {
  return (
    <div className="container">
        <h1>O que você quer fazer?</h1>

        <Link to="/orcamento" style={{ textDecoration: "none" }}>
          <button>Orçamentos</button>
        </Link>
        <Link to="/recibo" style={{ textDecoration: "none" }}>
        <button>Recibo</button>
        </Link>
        <Link to="/Tarefas" style={{ textDecoration: "none" }}>
        <button>Lista de tarefas</button>
        </Link>
       
    </div>
  );
};

export default TelaInicial;

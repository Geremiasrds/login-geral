import { useNavigate } from "react-router-dom";

const TelaInicial = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>O que você quer fazer?</h1>
      <button onClick={() => navigate("/orcamento")}>Orçamentos</button>

      <button onClick={() => navigate("/tarefas")}>Tarefas diarias</button>
      <button onClick={() => navigate("/recibo")}>Fazer recibo</button>
    </div>
  );
};

export default TelaInicial;

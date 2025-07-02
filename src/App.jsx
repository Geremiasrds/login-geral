import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import TelaInicial from "./componentes/TelaInicial";
import Geral from "./componentes/orcamento/componentes/GeralOrcamento";
import LoginGeral from "./TelaDeLogin";
import ListaDeTarefas from "./componentes/lista-de-atividades/componentes/ListaDeAtividades";
import GeralRecibo from "./componentes/recbibo/GeralRecibo";

function App() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const estaLogado = localStorage.getItem("logado");
    if (estaLogado === "true") {
      setLogado(true);
    }
  }, []);

  const aoLogar = () => {
    setLogado(true);
    localStorage.setItem("logado", "true");
  };

  return (
    <div className="container">
      {logado ? (
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/orcamento" element={<Geral />} />
          <Route path="/tarefas" element={<ListaDeTarefas />} />
          <Route path="/recibo" element={<GeralRecibo />} />
        </Routes>
      ) : (
        <LoginGeral aoLogar={aoLogar} />
      )}
    </div>
  );
}

export default App;

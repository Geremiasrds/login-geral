import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TelaInicial from "./componentes/TelaInicial";
import Geral from "./componentes/orcamento/componentes/GeralOrcamento";
import LoginGeral from "./TelaDeLogin";
import ListaDeTarefas from "./componentes/lista-de-atividades/componentes/ListaDeAtividades";
import GeralRecibo from "./componentes/recbibo/GeralRecibo";

function App() {
  // Estado logado persistido no localStorage
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem("logado") === "true";
  });

  useEffect(() => {
    localStorage.setItem("logado", logado);
  }, [logado]);

  // Exemplo de estado geral que pode ser persistido e passado aos filhos
  const [algumEstado, setAlgumEstado] = useState(() => {
    const saved = localStorage.getItem("algumEstado");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("algumEstado", JSON.stringify(algumEstado));
  }, [algumEstado]);

  const aoLogar = () => {
    setLogado(true);
  };

  return (
    <div className="container">
      {logado ? (
        <Routes>
          <Route
            path="/"
            element={<TelaInicial algumEstado={algumEstado} setAlgumEstado={setAlgumEstado} />}
          />
          <Route
            path="/orcamento"
            element={<Geral algumEstado={algumEstado} setAlgumEstado={setAlgumEstado} />}
          />
          <Route
            path="/tarefas"
            element={<ListaDeTarefas algumEstado={algumEstado} setAlgumEstado={setAlgumEstado} />}
          />
          <Route
            path="/recibo"
            element={<GeralRecibo algumEstado={algumEstado} setAlgumEstado={setAlgumEstado} />}
          />
        </Routes>
      ) : (
        <LoginGeral aoLogar={aoLogar} />
      )}
    </div>
  );
}

export default App;

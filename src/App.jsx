// App.jsx
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import TelaInicial from "./componentes/TelaInicial";
import Geral from "./componentes/orcamento/componentes/GeralOrcamento";
import GlobalStyles from "./componentes/orcamento/GlobalStyles";
import GeralRecibo from "./componentes/recbibo/GeralRecibo";
import ListaDeTarefas from "./componentes/lista-de-atividades/componentes/ListaDeAtividades";
import { Login } from "./TelaDeLogin"; // importa sua tela de login

// Componente animado de rotas
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionPage><TelaInicial /></MotionPage>} />
        <Route path="/orcamento" element={<MotionPage><Geral /></MotionPage>} />
        <Route path="/recibo" element={<MotionPage><GeralRecibo /></MotionPage>} />
        <Route path="/tarefas" element={<MotionPage><ListaDeTarefas /></MotionPage>} />
      </Routes>
    </AnimatePresence>
  );
}

// Componente para animar páginas
const MotionPage = ({ children }) => (
  <motion.div
    className="page"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// App principal
function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <GlobalStyles />
      {!logado ? (
        <Login aoLogar={() => setLogado(true)} />
      ) : (
        <AnimatedRoutes />
      )}
    </Router>
  );
}

export default App;

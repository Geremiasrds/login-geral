// App.jsx
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import TelaInicial from "./componentes/TelaInicial";
import Geral from "./componentes/orcamento/componentes/GeralOrcamento";
import GlobalStyles from "./componentes/orcamento/GlobalStyles";
import GeralRecibo from "./componentes/recbibo/GeralRecibo";
import ListaDeTarefas from "./componentes/lista-de-atividades/componentes/ListaDeAtividades";
import { Login } from "./TelaDeLogin";

// Componente para animar as páginas
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

// Componente com as rotas animadas
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

// Componente que gerencia login e redirecionamento
function AppContent() {
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  // Quando logar, redireciona para rota inicial "/"
  useEffect(() => {
    if (logado) {
      navigate("/");
    }
  }, [logado, navigate]);

  return !logado ? (
    <Login aoLogar={() => setLogado(true)} />
  ) : (
    <AnimatedRoutes />
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContent />
    </Router>
  );
}

export default App;

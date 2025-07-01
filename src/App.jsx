// App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import TelaInicial from "./componentes/TelaInicial";
import Geral from "./componentes/orcamento/componentes/GeralOrcamento";
import GlobalStyles from "./componentes/orcamento/GlobalStyles";
import GeralRecibo from "./componentes/recbibo/GeralRecibo";
import ListaDeTarefas from "./componentes/lista-de-atividades/componentes/ListaDeAtividades";

// Componente que aplica animação nas rotas
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TelaInicial />
            </motion.div>
          }
        />
        <Route
          path="/orcamento"
          element={
            <motion.div
              className="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Geral />
            </motion.div>
          }
        />
        <Route
          path="/recibo"
          element={
            <motion.div
              className="recibo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GeralRecibo />
            </motion.div>
          }
        />
        <Route
          path="/tarefas"
          element={
            <motion.div
              className="tarefas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ListaDeTarefas />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// App principal com roteamento
function App() {
  return (
    <Router>
      <GlobalStyles />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaFileInvoiceDollar,
  FaTasks,
  FaReceipt,
  FaSignOutAlt,
} from "react-icons/fa";

import styles from "./TelaInicial.module.css";
import ConfirmarSaida from "./ConfirmarSaida"; // modal

const TelaInicial = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleLogoutConfirmado = () => {
    localStorage.removeItem("logado");
    setMostrarModal(false);
    navigate("/"); // redireciona após logout
    window.location.reload(); // força recarregar App (importante!)
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bem-vindo! O que deseja fazer hoje?</h1>

        <div className={styles.options}>
          <button className={styles.optionBtn} onClick={() => navigate("/orcamento")}>
            <FaFileInvoiceDollar className={styles.icon} />
            <div>
              <strong>Orçamentos</strong>
              <p>Crie e gerencie seus orçamentos rapidamente</p>
            </div>
          </button>

          <button className={styles.optionBtn} onClick={() => navigate("/tarefas")}>
            <FaTasks className={styles.icon} />
            <div>
              <strong>Tarefas Diárias</strong>
              <p>Organize suas atividades do dia a dia</p>
            </div>
          </button>

          <button className={styles.optionBtn} onClick={() => navigate("/recibo")}>
            <FaReceipt className={styles.icon} />
            <div>
              <strong>Fazer Recibo</strong>
              <p>Gere recibos profissionais em poucos segundos</p>
            </div>
          </button>
        </div>

        <button
          className={styles.logoutBtn}
          onClick={() => setMostrarModal(true)}
        >
          <FaSignOutAlt className={styles.logoutIcon} /> Sair
        </button>
      </div>

      {mostrarModal && (
        <ConfirmarSaida
          onConfirmar={handleLogoutConfirmado}
          onCancelar={() => setMostrarModal(false)}
        />
      )}
    </div>
  );
};

export default TelaInicial;

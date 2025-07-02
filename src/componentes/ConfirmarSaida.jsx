// src/componentes/ConfirmarSaida.jsx
import styles from "../LoginGeral.module.css";

const ConfirmarSaida = ({ onConfirmar, onCancelar }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Deseja sair?</h2>
        <p>Tem certeza que deseja encerrar a sessão?</p>
        <div className={styles.botoes}>
          <button className={styles.cancelar} onClick={onCancelar}>
            Cancelar
          </button>
          <button className={styles.confirmar} onClick={() => onConfirmar()}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarSaida;

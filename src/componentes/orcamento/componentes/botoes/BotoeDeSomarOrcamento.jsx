import styles from "../Geral.module.css";

const Botao = ({ onClick }) => {
  return (
    <div>
      <button className={styles.botaoPrincipal} onClick={onClick}>
        
      </button>
    </div>
  );
};

export default Botao;

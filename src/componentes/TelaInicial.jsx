import { useNavigate } from "react-router-dom";
import styles from "./TelaInicial.module.css"; // ajuste o caminho conforme sua estrutura

const TelaInicial = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>O que você quer fazer?</h1>
      
      <button className={styles.botao} onClick={() => navigate("/orcamento")}>
        Orçamentos
      </button>

      <button className={styles.botao} onClick={() => navigate("/tarefas")}>
        Tarefas diarias
      </button>

      <button className={styles.botao} onClick={() => navigate("/recibo")}>
        Fazer recibo
      </button>
    </div>
  );
};

export default TelaInicial;

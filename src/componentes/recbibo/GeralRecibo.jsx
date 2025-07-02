import { useNavigate } from "react-router-dom";
import styles from "../recbibo/GeralRecibo.module.css";

const GeralRecibo = () => {
  const navigate = useNavigate();

  const voltarParaTelaInicial = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.botaoVoltar}
        onClick={voltarParaTelaInicial}
        title="Voltar à tela inicial"
        aria-label="Voltar à tela inicial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.iconeVoltar}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className={styles.textoBotao}>Voltar</span>
      </button>

      <h2 className={styles.titulo}>🚧 Estamos em manutenção...</h2>
      <p className={styles.mensagem}>
        Estamos fazendo alguns ajustes para tornar sua experiência ainda mais
        prática, leve e intuitiva.
      </p>
      <p className={styles.mensagem}>
        Obrigado por sua paciência! Em breve, tudo estará funcionando perfeitamente. 💙
      </p>
    </div>
  );
};

export default GeralRecibo;

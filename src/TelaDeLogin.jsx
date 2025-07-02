import { useState } from "react";
import styles from "./LoginGeral.module.css"; // ajuste o caminho conforme sua estrutura

const LoginGeral = ({ aoLogar }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState(""); // success | error

  const mostrarMensagem = (texto, tipo = "success") => {
    setMensagem(texto);
    setTipoMensagem(tipo);
    setTimeout(() => {
      setMensagem("");
      setTipoMensagem("");
    }, 3000);
  };

  const entrar = () => {
    if (nome && senha) {
      aoLogar(); // <- Ativa a tela inicial
    } else {
      mostrarMensagem("Preencha nome e senha", "error");
    }
  };

  const cadastrar = () => {
    if (nome && senha) {
      mostrarMensagem("Usuário cadastrado (simulação)", "success");
    } else {
      mostrarMensagem("Preencha nome e senha para cadastrar", "error");
    }
  };

  return (
    <div className={styles.loginBox}>
      <h1 className={styles.loginTitle}>Login</h1>

      <p className={styles.loginDescricao}>
        Qualquer nome ou senha funciona — é só um teste!
      </p>

      <div className={styles.loginForm}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.loginInput}
        />

        <button onClick={entrar} className={styles.loginButton}>
          Entrar
        </button>
        <button onClick={cadastrar} className={`${styles.loginButton} ${styles.secondary}`}>
          Cadastrar
        </button>

        {mensagem && (
          <div className={`${styles.mensagem} ${styles[tipoMensagem]}`}>
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginGeral;

import { useState } from "react";

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
    <div className="login-box">
      <h1 className="login-title">Login</h1>

      <p className="login-descricao">
        Qualquer nome ou senha funciona — é só um teste!
      </p>

      <div className="login-form">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="login-input"
        />

        <button onClick={entrar} className="login-button">
          Entrar
        </button>
        <button onClick={cadastrar} className="login-button secondary">
          Cadastrar
        </button>

        {mensagem && (
          <div className={`mensagem ${tipoMensagem}`}>{mensagem}</div>
        )}
      </div>
    </div>
  );
};

export default LoginGeral;

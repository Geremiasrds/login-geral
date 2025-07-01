import { useNavigate } from "react-router-dom";
import '../recbibo/style.css'
const GeralRecibo = () => {

  const navigate = useNavigate();

  const voltarParaTelaInicial = () => {
    navigate("/");
  };

  return (
    <div className="container-recibo">
      <button className="botao-emoji" onClick={voltarParaTelaInicial} title="Voltar à tela inicial">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </button>

      <h2 className="titulo">🚧 Estamos em manutenção...</h2>
      <p className="mensagem">
        Estamos fazendo alguns ajustes para tornar sua experiência ainda mais prática, leve e intuitiva.
      </p>
      <p className="mensagem">
        Obrigado por sua paciência! Em breve, tudo estará funcionando perfeitamente. 💙
      </p>
    </div>
  );
};

export default GeralRecibo;

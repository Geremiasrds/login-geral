// src/styles/GlobalStyles.js
import { color } from "framer-motion";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --bg-gradient-start: #e0f0ff;
    --bg-gradient-end: #a8d0ff;
    --container-bg: rgba(255, 255, 255, 0.85); /* fundo branco apagado */
    --text-color: #1c2a4a;
    --logo-color: #2a54c2;
    --button-gradient-start: #3b82f6;
    --button-gradient-end: #2563eb;
    --button-shadow: rgba(37, 99, 235, 0.4);
    --button-shadow-hover: rgba(37, 99, 235, 0.7);
    --input-bg: #ffffff;
    --input-border: #d0d0d0;
    --input-focus-border: #00c896;
    --button-bg: var(--button-gradient-start);
    --button-hover-bg: #2563eb;
    --button-shadow-base: rgba(0, 0, 0, 0.15);
    --line-color: rgba(0, 0, 0, 0.1);
  }

    

  html, body {
    height: 100%;
    overflow: auto;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  display: flex;
  justify-content: center;
  align-items: center; 
}
  .lista{
  width: 100vh;
  background-color: rgba(249, 251, 252, 0.53);
  border-radius: 12px;

  }

  .tabela-do-orcamento{
   background-color: rgb(249, 251, 252);
   border-radius: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

 

  span {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    border-bottom: 1px solid rgba(5, 5, 5, 0.2);
    border-radius: 8px;
    background-color: rgba(112, 128, 144, 0.1);
    display: inline-block;
  }

  button {
    width: 100%;
    max-width: 200px;
    padding: 14px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    background: linear-gradient(90deg, var(--button-gradient-start), var(--button-gradient-end));
    color: #fff;
    box-shadow: 0 6px 12px var(--button-shadow);
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.05em;
    display: block;
    margin: 16px auto; /* espaçamento entre botões */
  }

  button:hover {
    background: linear-gradient(90deg, var(--button-gradient-end), var(--button-gradient-start));
    box-shadow: 0 10px 18px var(--button-shadow-hover);
    transform: translateY(-2px) scale(1.02);
  }

  button:active {
    transform: scale(0.98);
    box-shadow: 0 5px 10px var(--button-shadow);
  }

  input {
    width: 100%;
    padding: 12px 20px;
    border: 1.8px solid var(--input-border);
    border-radius: 10px;
    background: var(--input-bg);
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    margin: 12px 0;
  }

  input:focus {
    border-color: var(--input-focus-border);
    box-shadow: 0 0 8px var(--input-focus-border);
    outline: none;
  }

  input::placeholder {
    color: #888;
    font-style: italic;
  }

  h1, h2, h3 {
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h2::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: var(--button-bg);
    border-radius: 4px;
    display: block;
    margin: 8px auto 0;
    box-shadow: 0 2px 10px var(--button-shadow-base);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
   


/* Logo do PDF */
.logo-orcamento img {
  max-width: 140px;
  position: fixed;
  top: 20px;
  right: 20px;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.15));
  user-select: none;
}

/* Título principal */
.titulo {
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  color: #2563eb;
  margin-bottom: 2rem;
  text-shadow: 0 1px 4px rgba(37, 99, 235, 0.6);
}

/* Tabela com estilo moderno */
.tabela {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: #1c2a4a;
}

.tabela thead tr th {
  background: #3b82f6;
  color: white;
  font-weight: 700;
  padding: 14px 18px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  user-select: none;
}

.tabela tbody tr {
  background: #f7faff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.05);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.tabela tbody tr:hover {
  background: #e1ecff;
}

.tabela tbody tr td {
  padding: 14px 18px;
  text-align: center;
  vertical-align: middle;
}

.tabela tfoot tr td {
  font-weight: 700;
  font-size: 1.3rem;
  padding: 16px 18px;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 0 0 10px 10px;
  text-align: right;
  color: #2563eb;
}

/* Rodapé */
.rodape {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #4a4a4a;
  font-weight: 500;
  margin-bottom: 0;
}

.botoes-acoes {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 1.5rem 0 3rem;
  flex-wrap: wrap;
}

/* Botão voltar estilizado */
.botao-voltar {
  max-width: 160px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 14px 0;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.4);
  transition: all 0.3s ease;
  user-select: none;
}



.botao-voltar:hover {
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  box-shadow: 0 9px 22px rgba(37, 99, 235, 0.7);
  transform: translateY(-3px) scale(1.05);
}

.botao-voltar:active {
  transform: scale(0.97);
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
}

/* Responsividade */
@media (max-width: 768px) {
 

  .titulo {
    font-size: 2rem;
  }

  .tabela thead tr th,
  .tabela tbody tr td {
    padding: 12px 10px;
    
    font-size: 1rem;
  }

  .tabela tfoot tr td {
    font-size: 1.1rem;
  }

  .botoes-acoes {
    gap: 16px;
  }
}
.botao-emoji {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: linear-gradient(90deg, var(--button-gradient-start), var(--button-gradient-end));
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 12px var(--button-shadow);
  padding: 0;
  border: none;
}

.botao-emoji:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 18px var(--button-shadow-hover);
}







  @media (max-width: 700px) {
    h1 {
      font-size: 1.8rem;
    }
         .lista-de-itens {
      width: 100%px;
  display: flex; 
  }

  .tabela tfoot tr td {
    font-size: 1rem;
  }

  .botoes-acoes {
    flex-direction: column;
    gap: 12px;
  }

  .botao-voltar {
    font-size: 0.95rem;
  }
}

 @keyframes popIn {
    0% {
      transform: scale(0.5) rotate(-10deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(6deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
  }
    h2 {
      font-size: 1.4rem;
    }

    

    .container {
  background: rgb(252, 248, 248);
  backdrop-filter: blur(5px);
  border-radius: 18px;
  color: #1c2a4a;
  font-family: 'Inter', sans-serif;
  position: relative;
   padding: 10rem 1rem;
}
     .lista{
  width: 400px;
  background-color: rgba(249, 251, 252, 0.9);
  border-radius: 12px;

  }

   .titulo {
    font-size: 1.6rem;
  }

  .tabela thead tr th,
  .tabela tbody tr td {
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .lista-de-itens span{
    height: 20px;
    padding-top: 3px;
    margin-top: 15px;
    
    
    }
 
  }
`;

export default GlobalStyles;

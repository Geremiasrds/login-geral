import React from "react";
import InputsEditaveis from "../inputs/inputsEditaves"; 
import BotaodeGeraOrcamento from "../botoes/BotaodeGeraOrcamento";

const CardDaLista = ({ OqueFoiDigitadoNoInput, setItensConfirmados, total, onGerarOrcamento }) => {
  const atualizarItem = (index, campo, valor) => {
    const novosItens = [...OqueFoiDigitadoNoInput];

    if (campo === "quantidade") {
      novosItens[index][campo] = parseInt(valor) || 0;
    } else if (campo === "valorUnitario") {
      novosItens[index][campo] = parseFloat(valor) || 0;
    } else {
      novosItens[index][campo] = valor;
    }

    setItensConfirmados(novosItens);
  };

  return (
    <div className="lista">
      {OqueFoiDigitadoNoInput.length > 0 && (
        <>
          <p style={{fontSize: '11px'}}>
            ✏️ Os itens abaixo são editáveis, Clique em cima para editar.
          </p>

          {OqueFoiDigitadoNoInput.map((item, index) => (
            <div key={index} className="lista-de-itens">
              
              <InputsEditaveis
                quantidade={item.quantidade}
                nome={item.nome}
                valorUnitario={item.valorUnitario}
                onChange={(campo, valor) => atualizarItem(index, campo, valor)}
              />
              <span>R${(item.quantidade * item.valorUnitario).toFixed(2).replace(".", ",")}</span>
            </div>
          ))}

          <div className="total-geral">
            <strong>Total: R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>

         
          <div className="botao-gerar">
            <BotaodeGeraOrcamento onClick={onGerarOrcamento} />
          </div>
        </>
      )}
    </div>
  );
};

export default CardDaLista;

import React, { useEffect } from "react";
import BotaodeGeraOrcamento from "../botoes/BotaodeGeraOrcamento";
import styles from "../Geral.module.css";
import InputsEditaveis from "../inputs/inputsEditaves";

const CardDaLista = ({ OqueFoiDigitadoNoInput, setItensConfirmados, total, onGerarOrcamento }) => {

  // Carregar do localStorage ao montar o componente
  useEffect(() => {
    const itensSalvos = localStorage.getItem("itensConfirmados");
    if (itensSalvos) {
      setItensConfirmados(JSON.parse(itensSalvos));
    }
  }, [setItensConfirmados]);

  // Atualiza localStorage toda vez que OqueFoiDigitadoNoInput mudar
  useEffect(() => {
    localStorage.setItem("itensConfirmados", JSON.stringify(OqueFoiDigitadoNoInput));
  }, [OqueFoiDigitadoNoInput]);

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
    <div className={styles.cardLista}>
      {OqueFoiDigitadoNoInput.length > 0 && (
        <>
          <p>✏️ Os itens abaixo são editáveis, Clique em cima para editar.</p>

          {OqueFoiDigitadoNoInput.map((item, index) => (
            <div key={index} className={styles.listaDeItens}>
              <InputsEditaveis
                quantidade={item.quantidade}
                nome={item.nome}
                valorUnitario={item.valorUnitario}
                onChange={(campo, valor) => atualizarItem(index, campo, valor)}
                className={styles.inputsEditaveis}
              />
              <span>
                R${(item.quantidade * item.valorUnitario).toFixed(2).replace(".", ",")}
              </span>
            </div>
          ))}

          <div className={styles.totalGeral}>
            <strong>Total: R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div className={styles.botaoGerar}>
            <BotaodeGeraOrcamento onClick={onGerarOrcamento} className={styles.botaoPrincipal} />
          </div>
        </>
      )}
    </div>
  );
};

export default CardDaLista;

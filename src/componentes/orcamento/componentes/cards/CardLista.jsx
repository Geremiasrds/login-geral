import React, { useEffect, useState } from "react";
import styles from "../Geral.module.css";
import InputsEditaveis from "../inputs/inputsEditaves";
import Botoes from "../botoes/Botoes";

const CardDaLista = ({
  OqueFoiDigitadoNoInput,
  setItensConfirmados,
  total,
  onGerarOrcamento,
}) => {
  const [mostrarExtras, setMostrarExtras] = useState(false);

  useEffect(() => {
    const itensSalvos = localStorage.getItem("itensConfirmados");
    if (itensSalvos) {
      setItensConfirmados(JSON.parse(itensSalvos));
    }
  }, [setItensConfirmados]);

  useEffect(() => {
    localStorage.setItem("itensConfirmados", JSON.stringify(OqueFoiDigitadoNoInput));

    // Se houver itens, mostra os botões extras
    if (OqueFoiDigitadoNoInput.length > 0) {
      setMostrarExtras(true);
    }
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

  const removerUltimo = () => {
    const novos = [...OqueFoiDigitadoNoInput];
    novos.pop();
    setItensConfirmados(novos);
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
            <Botoes
              tipo="extras"
              remover={removerUltimo}
              gerarOrcamento={onGerarOrcamento}
              mostrarExtras={mostrarExtras}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardDaLista;

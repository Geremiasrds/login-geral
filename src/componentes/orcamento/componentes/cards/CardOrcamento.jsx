import React, { useEffect, useState } from "react";

import BotaoDeGeraPDF from "../botoes/BotaoDeGerapdf";
import { gerarPdf } from "../pdf/GeradorDePdf";

const CardDoOrcamento = ({ cliente: clienteProp, servicos: servicosProp, aoVoltar }) => {
  const [cliente, setCliente] = useState(clienteProp || "");
  const [servicos, setServicos] = useState(servicosProp || []);

  useEffect(() => {
    if (!clienteProp || !servicosProp) {
      const salvo = localStorage.getItem("orcamento_salvo");
      if (salvo) {
        const { cliente, servicos } = JSON.parse(salvo);
        setCliente(cliente);
        setServicos(servicos);
      }
    }
  }, [clienteProp, servicosProp]);

  const total = servicos.reduce(
    (acc, item) => acc + item.quantidade * item.valorUnitario,
    0
  );

  const handleGerarPDF = () => {
    gerarPdf(cliente, servicos);
  };

  return (
    <>
      <div className="tabela-do-orcamento">
        <div className="logo">
          <div className="logo-orcamento">
          </div>
        </div>

        <h1 className="titulo">ORÇAMENTO</h1>

        <table className="tabela">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Qtde</th>
              <th>Valor Unitário</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>{item.valorUnitario.toFixed(2).replace(".", ",")}</td>
                <td>{(item.quantidade * item.valorUnitario).toFixed(2).replace(".", ",")}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">TOTAL: R$ {total.toFixed(2).replace(".", ",")}</td>
            </tr>
          </tfoot>
        </table>

        
      </div>

      <div className="botoes-acoes">
        <button className="botao-voltar" onClick={aoVoltar}>Voltar</button>
        <BotaoDeGeraPDF onClick={handleGerarPDF} />
      </div>
    </>
  );
};

export default CardDoOrcamento;

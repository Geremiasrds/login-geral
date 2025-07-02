import { useState } from "react";
import ItensSimulado from "./inputs/ItensSimulado";
import ValorDoItem from "./inputs/ValorUnico";
import CardDaLista from "./cards/CardLista";
import BotaodeGeraOrcamento from "./botoes/BotaodeGeraOrcamento";
import CardDoOrcamento from "./cards/CardOrcamento";
import AjudaAoUsuario from "./AjudaAoUsuario/AjudaAoUsuario";
import styles from "../componentes/Geral.module.css";

function Geral() {
  const [itemDigitado, setItemDigitado] = useState("");
  const [valorDoItem, setValorDoItem] = useState("");
  const [itensConfirmados, setItensConfirmados] = useState([]);
  const [mostrarOrcamento, setMostrarOrcamento] = useState(false);
  const [mostrarAjuda, setMostrarAjuda] = useState(false);

  const handleGerarOrcamento = () => setMostrarOrcamento(true);

  const extrairQuantidadeENome = (texto) => {
    const partes = texto.trim().split(" ");
    const quantidade = parseInt(partes[0]);
    const nome = partes.slice(1).join(" ");

    if (isNaN(quantidade) || quantidade < 1) {
      return { quantidade: 1, nome: texto };
    }

    return { quantidade, nome };
  };

  const enviarTexto = () => {
    if (itemDigitado.trim() !== "" && valorDoItem.trim() !== "") {
      const { quantidade, nome } = extrairQuantidadeENome(itemDigitado);

      const novoItem = {
        nome,
        quantidade,
        valorUnitario: parseFloat(valorDoItem),
      };

      setItensConfirmados([...itensConfirmados, novoItem]);
      setItemDigitado("");
      setValorDoItem("");
    }
  };

  const total = itensConfirmados.reduce(
    (acc, item) => acc + item.quantidade * item.valorUnitario,
    0
  );

  return (
    <div className={styles.simulaOrcamento}>
      {mostrarAjuda ? (
        <AjudaAoUsuario />
      ) : mostrarOrcamento ? (
        <CardDoOrcamento
          servicos={itensConfirmados}
          aoVoltar={() => setMostrarOrcamento(false)}
        />
      ) : (
        <>
          <div className={styles.orcamento}>
            <h2 className={styles.titulo}>ORÇAMENTO</h2>

            <p
              className={styles.ajuda}
              onClick={() => setMostrarAjuda(true)}
            >
              Precisa de Ajuda?
            </p>

            <ItensSimulado
              itemDigitado={itemDigitado}
              setItemDigitado={setItemDigitado}
            />

            <ValorDoItem
              valorDoItem={valorDoItem}
              setValorDoItem={setValorDoItem}
              onSomar={enviarTexto}
            />
          </div>

          <BotaodeGeraOrcamento onClick={enviarTexto} />

          <CardDaLista
            OqueFoiDigitadoNoInput={itensConfirmados}
            setItensConfirmados={setItensConfirmados}
            total={total}
            onGerarOrcamento={handleGerarOrcamento}
          />
        </>
      )}
    </div>
  );
}

export default Geral;

import { useState, useEffect } from "react";
import styles from "./ListaDeTarefas.module.css";

const ListaDeTarefas = () => {
  const [input, setInput] = useState("");
  const [mostrarLista, setMostrarLista] = useState([]);

  const pegarValorDoInput = (e) => {
    setInput(e.target.value);
  };

  const mostarAoClicar = () => {
    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: input,
      concluida: false,
      tempoTotal: 25 * 60,
      tempoRestante: 25 * 60,
      rodando: false,
    };

    setMostrarLista([...mostrarLista, novaTarefa]);
    setInput("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMostrarLista((tarefas) =>
        tarefas.map((tarefa) => {
          if (tarefa.rodando && tarefa.tempoRestante > 0) {
            return { ...tarefa, tempoRestante: tarefa.tempoRestante - 1 };
          }
          if (tarefa.rodando && tarefa.tempoRestante === 0) {
            return { ...tarefa, rodando: false };
          }
          return tarefa;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const marcarComoConcluida = (id) => {
    setMostrarLista((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefas = (id) => {
    setMostrarLista((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const iniciarTimer = (id) => {
    setMostrarLista((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, rodando: true } : tarefa
      )
    );
  };

  const pausarTimer = (id) => {
    setMostrarLista((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, rodando: false } : tarefa
      )
    );
  };

  const resetarTimer = (id) => {
    setMostrarLista((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, tempoRestante: tarefa.tempoTotal, rodando: false }
          : tarefa
      )
    );
  };

  const formatarTempo = (segundos) => {
    const m = Math.floor(segundos / 60).toString().padStart(2, "0");
    const s = (segundos % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>O que você vai fazer hoje?</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Adicione sua tarefa..."
          value={input}
          onChange={pegarValorDoInput}
          onKeyDown={(e) => e.key === "Enter" && mostarAoClicar()}
        />
        <button onClick={mostarAoClicar}>Adicionar</button>
      </div>

      <ul className={styles.lista}>
        {mostrarLista.map((tarefa) => {
          const progresso =
            ((tarefa.tempoTotal - tarefa.tempoRestante) / tarefa.tempoTotal) *
            100;

          return (
            <li key={tarefa.id} className={styles.item}>
              <span
                style={{
                  textDecoration: tarefa.concluida ? "line-through" : "none",
                }}
              >
                {tarefa.texto}
              </span>

              <div className={styles.botoes}>
                <button onClick={() => marcarComoConcluida(tarefa.id)}>
                  {tarefa.concluida ? "Desfazer" : "Concluir"}
                </button>
                <button onClick={() => removerTarefas(tarefa.id)}>Remover</button>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>

              <div className={styles.tempoEControles}>
                <span>{formatarTempo(tarefa.tempoRestante)}</span>
                <div>
                  {!tarefa.rodando ? (
                    <button onClick={() => iniciarTimer(tarefa.id)}>Iniciar</button>
                  ) : (
                    <button onClick={() => pausarTimer(tarefa.id)}>Pausar</button>
                  )}
                  <button onClick={() => resetarTimer(tarefa.id)}>Resetar</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;

import { useState, useEffect } from "react";

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
    const m = Math.floor(segundos / 60)
      .toString()
      .padStart(2, "0");
    const s = (segundos % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "90vw",
        margin: "6vh auto",
        padding: "6vw",
        borderRadius: "16px",
        background: "#fefefe",
        boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          marginBottom: "8vw",
          color: "#2c3e50",
          fontWeight: "700",
        }}
      >
        O que você vai fazer hoje?
      </h1>

      {/* Input + Botão Adicionar */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "6vw",
        }}
      >
        <input
          type="text"
          placeholder="Adicione sua tarefa..."
          value={input}
          onChange={pegarValorDoInput}
          onKeyDown={(e) => e.key === "Enter" && mostarAoClicar()}
          style={{
            flex: "1 1 60%",
            padding: "14px",
            fontSize: "1rem",
            borderRadius: "12px",
            border: "1.5px solid #ccc",
            outline: "none",
            transition: "border-color 0.3s ease",
          }}
        />
        <button
          onClick={mostarAoClicar}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            flex: "1 1 35%",
          }}
        >
          Adicionar
        </button>
      </div>

      {/* Lista de Tarefas */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {mostrarLista.map((tarefa) => {
          const progresso =
            ((tarefa.tempoTotal - tarefa.tempoRestante) / tarefa.tempoTotal) *
            100;

          let cor = "#27ae60"; // verde
          if (tarefa.tempoRestante <= tarefa.tempoTotal * 0.3) cor = "#e74c3c"; // vermelho
          else if (tarefa.tempoRestante <= tarefa.tempoTotal * 0.6) cor = "#f39c12"; // amarelo

          return (
            <li
              key={tarefa.id}
              style={{
                background: "#fff",
                padding: "18px",
                marginBottom: "20px",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    color: tarefa.concluida ? "#aaa" : "#2c3e50",
                    textDecoration: tarefa.concluida ? "line-through" : "none",
                    flex: "1 1 60%",
                  }}
                >
                  {tarefa.texto}
                </span>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flex: "1 1 35%",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => marcarComoConcluida(tarefa.id)}
                    style={{
                      backgroundColor: tarefa.concluida ? "#3498db" : "transparent",
                      border: "2px solid #3498db",
                      color: tarefa.concluida ? "#fff" : "#3498db",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {tarefa.concluida ? "Desfazer" : "Concluir"}
                  </button>

                  <button
                    onClick={() => removerTarefas(tarefa.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      border: "none",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Remover
                  </button>
                </div>
              </div>

              {/* Barra de Progresso */}
              <div
                style={{
                  height: "10px",
                  background: "#ecf0f1",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: `${progresso}%`,
                    height: "100%",
                    backgroundColor: cor,
                    transition: "width 1s linear",
                  }}
                ></div>
              </div>

              {/* Timer e Botões */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    color: "#666",
                  }}
                >
                  {formatarTempo(tarefa.tempoRestante)}
                </span>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {!tarefa.rodando ? (
                    <button
                      onClick={() => iniciarTimer(tarefa.id)}
                      style={{
                        backgroundColor: "#2ecc71",
                        color: "#fff",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      Iniciar
                    </button>
                  ) : (
                    <button
                      onClick={() => pausarTimer(tarefa.id)}
                      style={{
                        backgroundColor: "#f39c12",
                        color: "#fff",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      Pausar
                    </button>
                  )}

                  <button
                    onClick={() => resetarTimer(tarefa.id)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Resetar
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ListaDeTarefas
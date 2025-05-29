"use client";
import { useState, useEffect } from "react";

export default function JogoDaSenha() {
    const [numeroSecreto, setNumeroSecreto] = useState("");
    const [tentativas, setTentativas] = useState([]);
    const [input, setInput] = useState("");
    const [jogoEncerrado, setJogoEncerrado] = useState(false);

  // Gerar número secreto
  const gerarNumeroSecreto = () => {
    let numero = "";
    while (numero.length < 4) {
      const digito = Math.floor(Math.random() * 10).toString();
      if (!numero.includes(digito.toString())) {
        numero += digito;
      }
    }
    return numero;
  };

  // Iniciar jogo
  const iniciarGame = () => {
    const secreto = gerarNumeroSecreto();
    setNumeroSecreto(secreto);
    setTentativas([]);
    setInput("");
    setJogoEncerrado(false);
    console.log("Número secreto:", secreto);
  };

  useEffect(() => {
    iniciarGame();
  }, []);

  // Verificar tentativa
  const verificarTentativa = () => {
    if (jogoEncerrado) return;

    if (input.length !== 4 || new Set(input).size !== 4 || isNaN(input)) {
      alert("Digite um número de 4 dígitos distintos.");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (input[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(input[i])) {
        cows++;
      }
    }

    const novaTentativa = {
      palpite: input,
      bulls: bulls,
      cows: cows,
    };

    setTentativas([novaTentativa, ...tentativas]);
    setInput("");

    if (bulls === 4) {
      setJogoEncerrado(true);
      alert("🎉 Parabéns! Você acertou o número secreto!");
    } else if (tentativas.length + 1 >= 10) {
      setJogoEncerrado(true);
      alert(
        `😢 Você esgotou suas tentativas! O número secreto era: ${numeroSecreto}`
      );
    }
  };

  return (
    <main id="jogo" className="min-h-screen bg-stone-50 p-8 font-sans flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-stone-700 border-b-4 border-amber-200 pb-2">
        ✨ Jogo da Senha ✨
      </h1>
      <p className="text-stone-500 mb-8">
        Descubra o número secreto de 4 dígitos únicos!
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            maxLength={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={jogoEncerrado}
            placeholder="Digite 4 dígitos únicos"
            className="border border-stone-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 text-black focus:ring-amber-300 disabled:opacity-50"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={verificarTentativa}
              disabled={jogoEncerrado}
              className="bg-rose-400 text-white px-4 py-2 rounded-xl hover:bg-rose-500 disabled:opacity-50"
            >
              Tentar
            </button>
            <button
              onClick={() => alert(`Senha: ${numeroSecreto}`)}
              className="bg-amber-300 text-stone-800 px-4 py-2 rounded-xl hover:bg-amber-400"
            >
              Mostrar Senha
            </button>
            <button
              onClick={iniciarGame}
              className="bg-emerald-400 text-white px-4 py-2 rounded-xl hover:bg-emerald-500"
            >
              Novo Jogo
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3 text-stone-700">
            Histórico de Tentativas
          </h2>
          {tentativas.length === 0 ? (
            <p className="text-stone-500">Nenhuma tentativa ainda.</p>
          ) : (
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {tentativas.map((t, index) => (
                <li
                  key={index}
                  className="bg-rose-100 border border-rose-200 px-4 py-2 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between">
                    <span className="font-mono text-stone-700">
                      #{index + 1}  {t.palpite}
                    </span>
                    <div>
                      🐂{" "}
                      <span className="font-bold text-rose-600">{t.bulls}</span>{" "}
                      | 🐄{" "}
                      <span className="font-bold text-amber-600">{t.cows}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

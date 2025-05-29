"use client";
import { useState } from "react";

export default function CachorroImg() {
  const [cachoroFoto, setCachorroFoto] = useState("");

  const fetchCachorro = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setCachorroFoto(data.message); // URL da imagem do cachorro
    } catch (error) {
      console.error("Erro ao buscar imagem do cachorro:", error);
    }
  };

  return (
    <main id="cachorro" className="bg-white">
      <div className="max-w-md mx-auto p-6 bg-[#5c4033]  rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4 text-beige-900">🐶 Melhore seu dia vendo um doguinho</h1>
      
        {cachoroFoto ? (
          <img
            src={cachoroFoto}
            alt="Imagem de cachorro"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        ) : (
          <p className="mb-4 text-beige-700">Clique no botão para ver um cachorro fofo!</p>
        )}

        <button
          onClick={fetchCachorro}
          className="bg-beige-300 hover:bg-beige-400 text-beige-900 font-bold py-2 px-4 rounded transition cursor-pointer"
        >
          Mostrar Doguinho
        </button>
      </div>

    </main>
  );
}

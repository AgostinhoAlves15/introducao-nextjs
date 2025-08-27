"use client";

import { useState } from "react";

export default function ListaDeCompras() {
  const [itens, setItens] = useState([
    { item: "Arroz", preco: 5, comprado: false },
    { item: "Feijão", preco: 7, comprado: false },
    { item: "Leite", preco: 4, comprado: false },
  ]);

  function comprar(index: number) {
    const novosItens = itens.map((produto, i) =>
      i === index ? { ...produto, comprado: true } : produto
    );
    setItens(novosItens);
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Compras</h1>
      <ul className="space-y-3">
        {itens.map((produto, i) => (
          <li
            key={i}
            className={`flex justify-between items-center p-3 rounded-lg ${
              produto.comprado ? "bg-gray-300 line-through text-gray-600" : "bg-white shadow"
            }`}
          >
            <span className="font-medium">{produto.item} - R${produto.preco}</span>
            {!produto.comprado && (
              <button
                onClick={() => comprar(i)}
                className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm m-4"
              >
                Comprar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
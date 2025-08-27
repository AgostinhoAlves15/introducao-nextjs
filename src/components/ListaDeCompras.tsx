"use client";
import { useState } from "react";

export default function ListaDeCompras() {
    const [itens, setItens] = useState([
        { item: "Arroz", preco: 10, comprado: false },
        { item: "Feijão", preco: 16, comprado: false },
        { item: "Leite", preco: 19, comprado: false },
    ]);

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Lista de Compras
            </h2>
            <ul>
                {itens.map((produto, i) => (
                    <li
                        key={i}
                        className={`flex items-center justify-between p-4 mb-3 rounded transition ${
                            produto.comprado
                                ? "bg-gray-100 text-gray-400 hover:bg-red-200"
                                : "bg-green-50 hover:bg-green-200"
                        }`}
                    >
                        <span
                            style={{
                                textDecoration: produto.comprado ? "line-through" : "none",
                                color: produto.comprado ? "gray" : "black",
                            }}
                        >
                            {produto.item} - R$ {produto.preco}
                        </span>

                        {!produto.comprado ? (
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition m-2"
                                onClick={() => {
                                    itens[i].comprado = true; // marca diretamente
                                    setItens([...itens]); // força atualização
                                }}
                            >
                                Comprar
                            </button>
                        ) : (
                            <span className="ml-4 text-green-600 font-semibold">
                                Comprado
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

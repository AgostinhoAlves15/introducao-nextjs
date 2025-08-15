'use client'
import { useState } from "react"

export default function Caculadora() {

    const [display, setDisplay] = useState("")
    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }
    const sun = () => {
        const values = display.split("+")
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }
    const subtraction = () => {
        const values = display.split("-")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
        )
        setDisplay(String(result))
    }
    const product = () => {
        const values = display.split("*")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
        )
        setDisplay(String(result))
    }
    const division = () => {
        const values = display.split("/")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / valorAtual
        )
        setDisplay(String(result))
    }

    const calculate = () => {
        if(display.includes("+")){
            sun()
        } else if(display.includes("-")){
            subtraction()
        } else if(display.includes("*")) {
            product()
        } else if(display.includes("/")) {
            division()
        } else {
            alert("Operação inválida")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center my-10 w-[400px] h-[500px] bg-gray-900 rounded-lg relative">
                <div className="flex justify-center overflow-x-auto
                    items-center border border-gray-400 rounded 
                    p-2 w-90 h-20 text-center text-xl absolute top-10 bg-gray-500">
                    {display}
                </div>
                {/* Conteúdo da calculadora aqui */}
                <div className="grid grid-cols-4 gap-2 w-80 mt-32 text-white">
                    {/* Primeira linha */}
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "7")}>
                        7
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "8")}>
                        8
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "9")}>
                        9
                    </button>
                    <button 
                        className="bg-gray-500 p-2 rounded hover:bg-gray-400"
                        onClick={() => setDisplay(display + "/")}>
                        /
                    </button>
                    {/* Segunda linha */}
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "4")}>
                        4
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "5")}>
                        5
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "6")}>
                        6
                    </button>
                    <button 
                        className="bg-gray-500 p-2 rounded hover:bg-gray-400"
                        onClick={() => setDisplay(display + "*")}>
                        *
                    </button>
                    {/* Terceira linha */}
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "1")}>
                        1
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "2")}>

                        2
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "3")}>
                        3
                    </button>
                    <button 
                        className="bg-gray-500 p-2 rounded hover:bg-gray-400"
                        onClick={() => setDisplay(display + "-")}>
                        -
                    </button>
                    {/* Quarta linha */}
                    <button 
                        className="bg-red-500 p-2 rounded hover:bg-red-400"
                        onClick={() => setDisplay("")}>
                        C
                    </button>
                    <button 
                        className="bg-gray-800 p-2 rounded hover:bg-gray-700"
                        onClick={() => setDisplay(display + "0")}>
                        0
                    </button>
                    <button 
                        className="bg-gray-500 p-2 rounded hover:bg-gray-400"
                        onClick={backspace}>
                        ←
                    </button>
                    <button 
                        className="bg-gray-500 p-2 rounded hover:bg-gray-400"
                        onClick={() => setDisplay(display + "+")}>
                        +
                    </button>
                    {/* Quinta linha: botão de igual ocupa toda a largura */}
                    <button onClick={() => calculate()}
                        className="bg-green-500 p-2 col-span-4 rounded mt-2 hover:bg-green-400">
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

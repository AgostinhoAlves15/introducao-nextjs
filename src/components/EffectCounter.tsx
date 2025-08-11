'use client'

import { useEffect, useState } from "react"


export default function EffectCounter() {


    const [count, setCount] = useState(0)

    useEffect(()=>{
        alert('usando useEffect')
        document.title = `Contagem: ${count}`
    }, [count])

    return (
        <div className="text-center p-10">
            <h1>Contagem: {count}</h1>
            <button className="bg-red-400 p-3 m-3" onClick={()=>{setCount(count+1)}}>Incrementar</button>
            <button onClick={()=>{setCount(0)}}>Resetar</button>
        </div>
    )
}
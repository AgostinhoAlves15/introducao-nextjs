'use client'

import { useEffect, useState } from "react";

export default function Lampada() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.title = isOn ? "Lâmpada Ligada" : "Lâmpada Desligada";
    }, [isOn]);

    return (
        <div className="text-center p-10 flex flex-col items-center gap-4 justify-center">
            <img
            src={isOn ? "https://cdn-icons-png.flaticon.com/512/702/702797.png" : "https://cdn-icons-png.flaticon.com/512/702/702814.png"}
            alt={isOn ? "Lâmpada ligada" : "Lâmpada desligada"}
            width={200}
            />
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "Desligar" : "Ligar"}
            </button>
        </div>
    );
}
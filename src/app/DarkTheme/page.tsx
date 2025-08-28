"use client";

import ToggleDark from "@/components/ToggleDark";
import { useState } from "react";

export default function DarkTheme() {

    const [isDark, setIsDark] = useState(false)

    const HandleToggleTheme = () => {
        setIsDark(isDark=> !isDark)
    }

  return (
    <div
      className={`
          h-screen flex flex-col
          justify-center items-center
          transition-all duration-1000
          ${isDark ? ' text-black bg-amber-100 '
            : 'bg-gray-900 text-white'
           }
        `}
    >
      <h1 className="text-5xl">Página {isDark ? 'Light Theme' : 'Dark Theme'}</h1>
      

      <ToggleDark onToggle={HandleToggleTheme} isDark={isDark}/>
    </div>
  );
}

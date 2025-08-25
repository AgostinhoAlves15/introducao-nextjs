'use client'

import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function ButtonMusic() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`
                flex items-center gap-3 px-6 py-3 rounded-full
                shadow-md transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-400
                ${isPlaying
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-200"}
            `}
        >
            <span className="text-2xl">
                {isPlaying ? <FaPause /> : <FaPlay />}
            </span>
            <span className="font-semibold text-lg">
                {isPlaying ? "Pause" : "Play"}
            </span>
        </button>
    );
}

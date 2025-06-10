'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

type Postdg =  {
    message: string;
    status: string;
}

export default function DogsPage() {
    const [postsdg, setPosts] = useState<Postdg | null>(null)

    const fetchPost = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Random Dog</h1>

            {postsdg && (
                <div className="bg-violet-300 p-4 m-4 rounded-3xl text-center">
                    <img
                    src={postsdg?.message}
                    alt="Random dog"
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg"
                    />
                    <button 
                        onClick={fetchPost} 
                        className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                    >
                        Buscar outro cachorro
                    </button>
                </div>
            )}
        </div>
    )
}

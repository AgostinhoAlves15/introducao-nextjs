'use client'


import { useState } from "react"

interface ConterLikes {
    initial: number
}

export default function LikeButton(props:ConterLikes){

    const [likes,setLikes]=useState(props.initial)


    return (
        <div className="flex justify-center rounded-2xl w-[400px] h-[300px] m-10 bg-gradient-to-r from-cyan-500 to-blue-800 flex-col items-center">
            <h1 className="font-extrabold text-3xl text-white">Contador de Likes: </h1>
            <h2 className="text-red-600 font-bold text-3xl">{likes}</h2>
            <img
            className="hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/512/8236/8236748.png"
            alt="Ícone"
            width="64"
            height="64"
            onClick={() => setLikes(likes + 1)}
            style={{ cursor: 'pointer' }}
            />
            
        </div>
        
    )
}
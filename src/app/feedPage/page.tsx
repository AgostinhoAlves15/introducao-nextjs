"use client";

import PostCard from "@/components/PostCard";
import { useState } from "react";

interface post {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
}

export default function Feed() {
  const [isPost, setIsPost] = useState<post[]>([
    { id: 1, autor: "Agostinho", conteudo: "Meu primeiro post 🎉", likes: 0 },
    { id: 2, autor: "Davi", conteudo: "Meu primeiro post 🎉", likes: 2 },
    { id: 3, autor: "dandan", conteudo: "Meu primeiro post 🎉", likes: 20 },
  ]);

const HandleLikes = (id:number)=>{
    setIsPost(
        isPost.map((post)=>
        post.id === id ? {...post, likes:post.likes + 1} : post
        )
    )
}   


  return (
    <div className="flex justify-center items-center mt-5">
      <div className=" h-[700px] rounded-4xl bg-gradient-to-r from-[#f41df4] via-[#d62976] to-[#4f5bd5] w-96 flex flex-col justify-center content-center">
        <h1 className="text-5xl text-pink-300 text-center">Feed do insta </h1>

        <div className=" rounded-2xl">
            {isPost.map((post)=>(
                <div key={post.id} className="
                bg-pink-500/50 text-white rounded-4xl m-3 hover:bg-pink-400/50">
                    <PostCard
                    key={post.id}
                    Post={post}
                    onLike={HandleLikes}
                    />
                </div>
            ))}

        </div>

      </div>
    </div>
  );
}

'use client'

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeButton() {

  const [IsLiked, setIsLiked] = useState(false);
  

  return (
    <button
    onClick={()=>{setIsLiked(!IsLiked)}}
      className={`flex items-center
        space-x-2 p-2 rounded-b-md
        text-gray-400 hover:text-gray-500 
        bg-gray-50 hover:bg-gray-100 text-7xl
        ${IsLiked ? "text-red-500 hover:text-red-600 bg-red-100 hover:bg-red-200"  : "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-200"}`}
    >
      <span>
        {IsLiked ? <FaHeart/> : <FaRegHeart/>}
      </span>
      {IsLiked ? "Curtido" : "Curtir"}
    </button>
  );
}

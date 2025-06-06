'use client'

import { useState, useEffect } from "react"

type Post =  {
    id: number;
    title: string;
    body: string;
}


export default function PostsPages(){
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{
        const fetchPost = async ()=>{
           const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
           const data = await res.json()
           setPosts(data)
        }
        fetchPost()

    },[])


    return(

        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Últimos Posts</h1>
            
            {posts.map((posts)=>(
                <div key={posts.id} className="bg-violet-300 p-4 m-4 rounded-4xl">
                    <h2 className="text-xl font-semibold">{posts.title}</h2>
                    <p className="text-gray-600 ">{posts.body}</p>
                </div>
            ))}

        </div>
    )
}
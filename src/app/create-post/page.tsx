'use client'

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"

type FormData = {
    title: string
    body: string
}

type ResponseData = {
    id: number
    title: string
    body: string
}


export default function CreatePostPage() {

const [FormData,setFormData] = useState<FormData>({title: '', body: ''})

const [ResponseData, setResponseData] = useState<ResponseData | null>(
  null
)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...FormData,
        [event.target.name]:event.target.value
      })
    }


    const handleSubmit = async (event: React.FormEvent)=>{
        event.preventDefault()

        const {data} = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
           FormData,
           {headers: {"Content-Type":"application/json"}}
          )
          setResponseData(data)
    }

  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-gray-100 shadow-xl/10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Criar novo Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Título</label>
            <input
              className="mt-1 border rounded px-3 py-2 w-full"
              type="text"
              name="title"
              value={FormData.title}
              required
              placeholder="Escreva Aqui"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Conteúdo</label>
            <textarea
              name="body"
              className="mt-1 border rounded px-3 py-2 w-full"
              rows={2}
              onChange={handleChange}
              value={FormData.body}
            />
          </div>

          <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full">
            Publicar
          </button>
          <Button className="bg-amber-400 ">Clique Aquiiiii</Button>
        </form>

        {ResponseData &&(
          <div
          className="mt-6 border border-green-500 bg-green-100">
          <p>Post criado com Sucesso</p>
          <p>(id:{ResponseData.id})</p>
          <p>(Título: {ResponseData.title})</p>
          <p>(Conteúdo: {ResponseData.body})</p>
          </div>
        )}

      </div>
    </div>
  )
}

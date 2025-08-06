"use client"

import { useState } from "react"


type Comentario = {
  nome: string
  mensagem: string
  data: string
}

type CommentFormProps = {
  onSubmit: (comentario: Comentario) => void
}

export default function CommentForm({ onSubmit }:CommentFormProps){

    const [nome,setNome] = useState('')
    const [mensagem,setMensagem] =useState('')
    const hadleSubmit = () =>{
        if(!nome.trim() || !mensagem.trim()){
            alert('Preencha todos os campos.')
            return
        }

        const NovoComentario = {
            nome,
            mensagem,
            data: new Date().toLocaleString(),
        }
        onSubmit(NovoComentario)
        setNome('')
        setMensagem('')

    }

    return(
        <div className="flex justify-center items-center">
            <div className="bg-black w-[400px] h-[400px] m-10 rounded-2xl flex justify-center items-center flex-col ">
                <h1 className="text-white items-start flex font-semibold">Nome:</h1>

                <input className="
                bg-white w-[350px] h-9 rounded-2xl text-center m-5 hover:bg-gray-300 focus:bg-gray-300"
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e)=>setNome(e.target.value)} 
                />

                <h1 className="text-white items-start flex font-semibold">Comentário:</h1>

                <textarea className=
                "w-[350px] h-[100px] bg-white rounded-xl text-center m-5 hover:bg-gray-300 focus:bg-gray-300"
                placeholder="Escreva um comentario aqui!"
                name="comment"
                value={mensagem}
                id="comment"
                onChange={(e)=>setMensagem(e.target.value)}> 
                </textarea>

                <button className="bg-white hover:bg-gray-300" onClick={hadleSubmit}>Enviar</button>
            </div>

        </div>
    )

}
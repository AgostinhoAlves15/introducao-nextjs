"use client"

import Comment from "./Comment"

type Comentario = {
  nome: string
  mensagem: string
  data: string
}

type CommentListProps = {
  comentarios: Comentario[]
}

export default function CommentList( {comentarios}:CommentListProps ){
    return(
         <div className="w-[400px] max-w-xl mt-8 space-y-4 mb-5">
            {comentarios.map((comentario, index)=>(
                <Comment 
                    key={index}
                    nome={comentario.nome}
                    mensagem={comentario.mensagem}
                    data={comentario.data}
                    />
            ))}
         </div>
    )
}
"use client"

type CommentProps = {
  nome: string
  mensagem: string
  data: string
}

export default function Comment({nome,mensagem,data}:CommentProps) {
    return(
        <div className="bg-black p-4 rounded-lg shadow-md text-center">
        <p className="text-white font-bold text-lg">{nome}</p>
        <p className="text-gray-300">{mensagem}</p>
        <p className="text-sm text-gray-500">{data}</p>
    </div>
    )
}
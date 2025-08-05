import Image from "next/image"

type CardProps = {
  title: string
  description: string
  imgUrl: string
  category: string
}




export default function Card2({ title, description, imgUrl, category }: CardProps) {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-gray-700 h-[300px] w-[300px] rounded-xl flex flex-col items-center justify-center hover:bg-gray-800 hover:w-80 transition-shadow">
        <h1 className="text-3xl text-white text-center mb-4 font-medium">{title}</h1>
      
        <Image className="rounded-2xl" src={imgUrl} alt="img" width={280} height={100} />

        <p className="text-center text-gray-400 mt-4">{description}</p>
        <hr />
        <h4>{category}</h4>
        </div>
    </div>
    
  )
}

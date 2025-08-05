import Image from "next/image"

type CardProps = {
  title: string
  description: string
  imgUrl: string
}

export default function Card2({ title, description, imgUrl }: CardProps) {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-green-800 h-[300px] w-[300px] rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white text-center mb-4">{title}</h1>
      
        <Image src={imgUrl} alt="img" width={280} height={100} />

        <p className="text-center text-gray-400 mt-4">{description}</p>
        </div>
    </div>
    
  )
}

// import NavBar from "@/components/NavBar"

import Button from "@/components/Button"
import Card2 from "@/components/Card2"
import Counter from "@/components/Counter"

const cardData = [
  {
    title: "Ben 10",
    description: "Desenho animado",
    imgUrl: "/images/ben10.webp",
    category: "Desenho"
  },
  {
    title: "Homem de Ferro",
    description: "Filme de ação",
    imgUrl: "/images/ironMen.jpeg",
    category: "Filme"
  },
  {
    title: "Naruto",
    description: "Anime ninja",
    imgUrl: "/images/naruto.webp",
    category: "Anime"
  },
  {
    title: "Toy Story",
    description: "Filme infantil",
    imgUrl: "/images/compose.webp",
    category: "Filme"
  },
  {
    title: "Scooby-Doo",
    description: "Desenho clássico",
    imgUrl: "/images/doo.jpeg",
    category: "Desenho"
  },
  {
    title: "Dragon Ball",
    description: "Anime de luta",
    imgUrl: "/images/dbz.jpg",
    category: "Anime"
  },
]



export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <Button label="click-ae"/>
            <div className="flex flex-wrap justify-center gap-4">
      {cardData.map((item, index) => (
        <Card2
          key={index}
          title={item.title}
          description={item.description}
          imgUrl={item.imgUrl}
          category={item.category}
        />
      ))}
      <Counter initial={0}/>
    </div>
        </div>
    )
}
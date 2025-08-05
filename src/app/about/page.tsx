// import NavBar from "@/components/NavBar"

import Button from "@/components/Button"
import Card2 from "@/components/Card2"

export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <Button label="click-ae"/>
            <Card2 description="muito legal" imgUrl="/images/ben10.webp" title="Ben10" />
        </div>
    )
}
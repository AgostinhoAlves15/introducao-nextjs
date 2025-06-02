import NavBar from "@/components/NavBar"
export default function About() {
    return (
        <div>
            <NavBar links={[
                    {label:'inicio', href:'/'},
                    {label:'Sobre Nós', href:'/about'},
                    {label:'Produtos', href:'products'}
                  ]  
                  }/>
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa...</p>
        </div>
    )
}
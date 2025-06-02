import ProductsList from "@/components/ProductList"
import NavBar from "@/components/NavBar"
export default function products() {

    return (
        <div>
            <NavBar links={[
                    {label:'inicio', href:'/'},
                    {label:'Sobre Nós', href:'/about'},
                    {label:'Produtos', href:'products'}
                  ]  
                  }/>
            <h1>Dados do Servidor</h1>
            <ProductsList/>
        </div>
    )
}
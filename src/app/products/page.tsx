import ProductsList from "@/components/ProductList"
import NavBar from "@/components/NavBar"
export default function products() {

    return (
        <div>
            <NavBar/>
            <h1>Dados do Servidor</h1>
            <ProductsList/>
        </div>
    )
}
import Image from "next/image";
import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar links={[
        {label:'inicio', href:'/'},
        {label:'Sobre Nós', href:'/about'},
        {label:'Produtos', href:'products'}
      ]  
      }/>
      <Welcome/>
    </div>
  );
}

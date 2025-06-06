import Image from "next/image";
import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

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
      <Card
        comp={[
          { titulo: 'Renderização Híbrida', sub: 'SSG, SSR e ISR para otimizar perfomance e SEO', icone: '🚀' },
          { titulo: 'CSS utility-first', sub: 'Tailwind CSS para estilização rápida e consistente', icone: '🎨' },
          { titulo: 'TypeScript Integrado', sub: 'Tipagem estática para um código mais seguro', icone: '🔒' }
        ]}
      />
    </div>
  );
}

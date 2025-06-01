import Image from "next/image";

interface date {
  
}


export default function NavBar(){
    return (
        <div className="">
    
            {/* navBar */}
            <nav className="bg-amber-200 shadow-sm">
                <div className="text-lg font-medium">
                    <div className="flex justify-between h-16 items-center">
    
                        <div className="flex items-center">
                          <Image 
                            src='https://www.svgrepo.com/show/354113/nextjs-icon.svg'
                            width={40}
                            height={40}
                            alt="img"
                            className=""
                          />
                          <span className="ml-4">NextApp</span>
                        </div>
    
                        <div className="flex space-x-6">
                          <a href="" className="text-lg font-bold hover:text-indigo-600">
                            Inicio
                          </a>
                          <a href="" className="text-lg font-bold hover:text-indigo-600">
                            Recursos
                          </a>
                          <a href="" className="text-lg font-bold hover:text-indigo-600">
                            Contato
                          </a>
                        </div>
    
                    </div>
                </div>
            </nav>
    
          <button><a href="/about">Sobre nós</a></button>
        </div>
      );
}
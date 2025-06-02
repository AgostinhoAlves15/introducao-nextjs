import Image from "next/image";

interface NavBarProps {
    links: {
      label: string
      href: string
    }[]
}

export default function NavBar({links}: NavBarProps){



    return (
        <div className="">
    
            {/* navBar */}
            <nav className="bg-amber-200 shadow-sm">
                <div className="text-lg font-medium">
                    <div className="flex justify-between h-16 items-center">

                        {/* Logo */}
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
    
                        {/* Links */}
                        <div className="flex space-x-6">
                            {
                              links.map((link,índice) =>(
                                  <a
                                   key={índice}
                                   href={link.href}
                                   >{link.label}
                                  </a>
                              ))
                            }
                        </div>
    
                    </div>
                </div>
            </nav>
    
          <button><a href="/about">Sobre nós</a></button>
        </div>
      );
}
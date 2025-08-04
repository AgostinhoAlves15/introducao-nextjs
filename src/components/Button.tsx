
type ButtonProps = {
    label: string //obrigatorio
    //color?: string  //opcional
}


export default function Button({label}: ButtonProps){ //{color}:ButtonProps)
    return(
        <button 
        className="
        px-4 py-2 bg-blue-400 text-white mx-1.5 hover:bg-amber-950"
        >
            {label}
        </button>
    )
}

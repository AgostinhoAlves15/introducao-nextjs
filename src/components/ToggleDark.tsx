type props = {
    isDark : boolean
    onToggle : () => void
}

export default function ToggleDark({onToggle, isDark}:props){
    return(
        <button onClick={onToggle} className="
        bg-blue-500 text-white py-2 px-2 
        rounded 
            ">
            { isDark ? 'Toggle Light' : 'Toggle Dark'}
        </button>
    )
}
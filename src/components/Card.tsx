interface Cardprops {
    comp: {
        titulo: string
        sub: string
        icone: string
    }[]
}

export default function Card({ comp }: Cardprops) {
    return (
        <div className="flex flex-col items-center p-5 m-3">
            <h1 className="text-xl font-black mb-6">Recursos Principais</h1>

            <div className="flex justify-center space-x-10">
                {comp.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-500 w-72 h-44 rounded-2xl p-4 text-white">
                        <div className="p-3">{item.icone}</div>
                        <h1 className="text-xl font-bold p-2">{item.titulo}</h1>
                        <h3 className="text-sm p-2 text-black">{item.sub}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

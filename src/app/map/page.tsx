import Map from "@/components/ui/Map"


export default function MapPage(){
    return(
        <div className="h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Mapa com Leaflet</h1>
                <p className="mb-4">
                    Clique nos marcadores para ver os detalhes dos locais
                </p>
                <Map/>
        </div>
    )
}
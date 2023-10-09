import Image from "next/image";

interface CardsProps{
    titulo: string;
    descripcion: string;
    ruta: string,
    alt: string
}


const ConocimientoCard = ({titulo, descripcion, ruta, alt}: CardsProps) =>{
    return(
        <div className="flex flex-col bg-white w-[270px] text-center py-2">
         <Image src={ruta} alt={alt} height={100} width={100}  className="mx-auto" />
          <span className="font-semibold">{titulo}</span>
          <span className="text-gray-500">{descripcion}</span>   
        </div>
    )
};


export {ConocimientoCard};
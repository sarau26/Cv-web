interface EducacionProps{
    titulo: string;
    descripcion: string;
    fecha : string;
    institucion : string;
}


const EducacionCard = ({titulo, descripcion, fecha, institucion}:EducacionProps) => {
    return(
    <div className="flex flex-row" >
        <div className="w-1/3">
        <p className="text-lg font-bold">{institucion}</p>
        <div className="flex">
            <p>Estudiante</p>
            <div className="bg-curri text-white px-1 ml-1">
            {fecha}
            </div>
    </div>
        </div>
        <div className="w-2/3">
        <p className="text-lg font-bold">{titulo}</p>
        <p className="text-gray-500 text-sm">
           {descripcion}
        </p>
        </div>
    </div>
    )
};

export {EducacionCard};
interface BarraProps {
    porcentaje: number;
    lenguaje: string;
  }

  const Porcentaje = ({ porcentaje, lenguaje }: BarraProps) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-1">
                <span className="text-left text-sm">{lenguaje}</span>
                <span className="text-right text-sm">{porcentaje}%</span>
            </div>
            <div className="flex items-center border border-curri bg-white rounded-full h-2 px-0.5 my-0.5">
                <div className="bg-curri rounded-full h-1/2" style={{ width: `${porcentaje}%` }}></div>
            </div>
        </div>
    );
};
  
  export {Porcentaje };
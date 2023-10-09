import { EducacionCard } from "@/components/EduacionCard";
import { Separador } from "@/components/Separador";

interface EducacionProps {
    titulo: string;
    descripcion: string;
}

const Educacion = ({titulo, descripcion}: EducacionProps) =>{
    return(
        <section className='flex flex-col gap-4'>
        <div>
        <h2 className="text-2xl font-bold text-center py-2">{titulo}</h2>
        <p className="text-gray-500 text-sm mx-auto max-w-lg">{descripcion}</p>
        </div>
        <div className="bg-white flex flex-col  px-2 py-8">
            <EducacionCard
            fecha = '15/01/2017 - 21/11/2018'
            titulo= 'Bachiller académico-media académica'
            institucion='CEFA'
            descripcion='Durante mi educación secundaria, participé activamente en un programa de profundización en matemáticas, lo que me permitió desarrollar una sólida base en esta disciplina' />
            <Separador />
            <EducacionCard
            fecha = '25/06/2019 - Act'
            titulo= 'Ingeniería de sistemas'
            institucion="Universidad de Antioquia"
            descripcion='Actualmente estoy cursando el pregrado de Ingeniería de sistemas, donde constantemente vivo experiencias  enriquecedoras que han contribuido significativamente a mi desarrollo como ingeniera en formación' />
        </div>
        </section>
    )
};

export {Educacion};
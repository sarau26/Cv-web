import { Separador } from '@/components/Separador';
import { CampoInformacion } from '@/components/Information';
import { Porcentaje } from '@/components/Porcentaje';
import { Skills } from '@/components/Skills';
import { PiIntersectSquareDuotone} from 'react-icons/pi'

interface SideBarProps {
    imageUrl: string;
    altText: string;
    name: string;
    profession: string;
}


const SideBar = ({ imageUrl, altText, name,profession }: SideBarProps) =>{
    return(
        <aside className="h-full w-3/12 bg-white flex flex-col py-5 fixed">
            <div className="flex flex-col gap-2 px-4">
                <div className="w-150 h-150 overflow-hidden mx-auto bg-gray-300 rounded-full" style={{ width: '150px', height: '150px' }}>
                    <img src={imageUrl} alt={altText} width={150} height={150} />
                </div>
            </div>
            <span className="text-center font-semibold">{name}</span>
            <span className="text-center text-gray-500">{profession}</span>
        <Separador />
        <div className="text-left px-4">
            <CampoInformacion nombre="Edad"valor="21" />
            <CampoInformacion nombre="Residencia"valor="Medellín" />
            <CampoInformacion nombre="Correo"valor="sara.uribez@udea.edu.co" />
            <CampoInformacion nombre="Dirección"valor="Cra 42A #84-29" />
        </div>
        <Separador />
        <div className="text-left px-4" >
        <h2 className="font-semibold text-sm">Idiomas</h2>
            <Porcentaje porcentaje={100} lenguaje='Español' />
            <Porcentaje porcentaje={45} lenguaje='Inglés'/>
        </div>
        <Separador />
        <div className="text-left px-4"> 
            <h2 className="font-semibold text-sm">Lenguajes de programación</h2>
            <Porcentaje porcentaje={80} lenguaje='Php'/>
            <Porcentaje porcentaje={50} lenguaje='Java'/>
            <Porcentaje porcentaje={50} lenguaje='Javascript'/>
        </div>
        <Separador />
        <div className="text-left px-4">
        <h2 className="font-semibold text-sm">Habilidades extras</h2>
        <Skills icon={PiIntersectSquareDuotone} texto="Yii2" />
        <Skills icon={PiIntersectSquareDuotone} texto="Laravel" />
        <Skills icon={PiIntersectSquareDuotone} texto="Spring" />
        </div>

        </aside>
    )
};

export {SideBar};
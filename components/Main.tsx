import { Perfil } from '@/components/Perfil';
import { Conocimiento } from '@/components/Conocimiento';
import { Educacion } from '@/components/Educacion';
import { Portafolio } from '@/components/Portafolio';
import { Footer } from '@/components/Footer';

const Main = () =>{

    return(
    <main className="w-8/12 px-6" style={{ marginLeft: 'calc(3/12 * 100%)', marginRight: 'calc(1/12 * 100%)' }}>
        <div>
        <Perfil />
        </div>
        <Conocimiento
        titulo="Mis conocimientos"
        descripcion="A lo largo de mi carrera universitaria y de mi experiencia laboral he adquirido una gama de conocimientos, buscando siempre estar en constante crecimiento y actualizada con las tecnologías emergentes "
        />
        <Educacion
        titulo="Educación"
        descripcion="Mi trayectoria educativa refleja mi compromiso con la excelencia y la constante búsqueda de aprendizaje"
        />
        <Portafolio
        titulo="Portafolio"
        descripcion="Durante mi carrera universitaria he sido participe de proyectos en diferentes áreas de la programación y con diferentes lenguajes como:"
        />
        <Footer 
        descripcion='Sara Uribe Z' />

    </main>
    
    )
};

export {Main};
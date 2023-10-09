import { ConocimientoCard } from "@/components/ConocimientoCard";

interface ConocimientoProps {
  titulo: string;
  descripcion: string;
}

const Conocimiento = ({ titulo, descripcion }: ConocimientoProps) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold text-center py-2">{titulo}</h2>
        <p className="text-gray-500 text-sm mx-auto max-w-lg">{descripcion}</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ConocimientoCard
          titulo="Desarrollo web"
          descripcion="Manejo de lenguajes como php y javascript para el correcto desarrollo back de aplicaciones web"
          ruta="/images/web.png"
          alt="Icono web"
        />
        <ConocimientoCard
          titulo="Desarrollo movil"
          descripcion="Conocimiento de lenguajes como Flutter para el desarrollo de aplicaciones móviles nativas"
          ruta="/images/movil.png"
          alt="Icono movil"
        />
        <ConocimientoCard
          titulo="DevOps"
          descripcion="Manejo de prácticas para el buen desarrollo de software y la entrega completa de un producto"
          ruta="/images/devops.png"
          alt="Icono Devops"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ConocimientoCard
          titulo="Metodologías ágiles"
          descripcion="Trabajar con metodologías ágiles como Scrum y Kanban para el correcto manejo de un equipo"
          ruta="/images/agile.png"
          alt="icono del conocimiento"
        />
        <ConocimientoCard
          titulo="Base de datos"
          descripcion="Manejo de sistemas de gestión de bases de datos relacionales, con enfoque en MySQL y PostreSQL"
          ruta="/images/bd.png"
          alt="icono del conocimiento"
        />
        <ConocimientoCard
          titulo="Git"
          descripcion="Conocimiento de el sistema de control de versiones para la buena colaboración con equipos de varios desarrolladores"
          ruta="/images/git.png"
          alt="icono del conocimiento"
        />
      </div>
    </section>
  );
};

export { Conocimiento };

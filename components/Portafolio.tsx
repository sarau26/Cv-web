import { PortafolioCard } from "@/components/PortafolioCard";
import { useState } from "react";
import { Boton } from "@/components/Boton";
import { PortafolioDialogo } from "@/components/Dialogos/PortafolioDialogo";

interface PortafolioProps {
    titulo: string;
    descripcion: string;
}

const portafolioData = [
    {
      titulo: 'AhorrApp',
      descripcion: 'Una aplicación que ayuda al ahorro de tu dinero y de tu tiempo',
      ruta: '/images/ahorra.jpg',
      alt: 'Icono App',
      tituloPor: 'AhorrApp es una aplicación móvil desarrollada en flutter, junto a dos compañeros de la carrera, en el cual el objetivo es comparar los precios de diferentes productos de la canasta familiar con precios reales en supermercados como el éxito, carulla y jumbo',
      descripcionPor: 'desssss',
      linkRepo: 'https://github.com/cbasguti/ahorra_app'
    },
    {
      titulo: 'Buscaminas',
      descripcion: 'Juego reconocido de buscaminas implementado para un solo jugador',
      ruta: '/images/buscaminas.jpg',
      alt: 'Icono 2',
      tituloPor: 'Buscaminas es un proyecto desarrollado en JAVA con el tema de listas ligdas, el cual se hizo con objetivos académicos',
      descripcionPor: 'desssss',
      linkRepo: 'https://github.com/cbasguti/ahorra_app'
    },
    {
        titulo: 'Ahorcado',
        descripcion: 'Juego del ahorcadito implementado para dos jugadores',
        ruta: '/images/ahorcado.png',
        alt: 'Icono 2',
        tituloPor: 'Ahorcadito es el típico juego de adivinar palabras ocultas, es un proyecto desarrollado en JAVA con Websockets, lo que permite que varios clientes se conecten a un servidor a jugar al mismo tiempo.',
        descripcionPor: 'desssss',
        linkRepo: 'https://github.com/cbasguti/ahorra_app'
      },
      {
        titulo: 'Hoja de vida',
        descripcion: 'Hoja de vida personal implementada con objetivos academicos',
        ruta: '/images/cv.png',
        alt: 'Icono 2',
        tituloPor: 'Esta hoja de vida es un proyecto desarrollado con NextJs, React y TailwindCSS donde se pone en práctica la reutilización de componentes y el manejo de iconos y dialogos',
        descripcionPor: 'desssss',
        linkRepo: 'https://github.com/cbasguti/ahorra_app'
      },
  ];


const Portafolio = ({titulo, descripcion}: PortafolioProps) =>{
    return(
        <section className='flex flex-col'>
        <div>
        <h2 className="text-2xl font-bold text-center py-2">{titulo}</h2>
        <p className="text-gray-500 text-sm mx-auto max-w-lg">{descripcion}</p>
        </div>
        <div className="grid grid-flow-col gap-4 overflow-x-auto">
        {portafolioData.map((data, index) => (
        <div key={index} className="flex-shrink-0">
        <PortafolioCard
          titulo={data.titulo}
          descripcion={data.descripcion}
          ruta={data.ruta}
          alt={data.alt}
          tituloPor={data.tituloPor}
          descripcionPor={data.descripcionPor}
          linkRepo={data.linkRepo}
        />
      </div>
    ))}
     </div>
        </section> 
    )
};

export {Portafolio};
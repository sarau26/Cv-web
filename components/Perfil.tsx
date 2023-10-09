import { Boton } from "@/components/Boton";
import Image from "next/image";
import { PerfilDialogo } from "@/components/Dialogos/PerfilDialogo";
import { useState } from "react";

const Perfil = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const PerfilClick = () =>{
    setDialogOpen(true);
  }
  return (
    <div className="bg-white h-[300px] flex flex-row  px-16 py-8">
      <div className="w-2/3 mx-auto">
        <p className="text-3xl font-bold">Yo soy Sara Uribe</p>
        <p className="text-3xl font-bold">
          Desarrollora <span className="text-curri">Back-end</span>
        </p>
        <p className="text-gray-500 text-sm">
          Soy una estudiante de Ingeniería de sistemas de la Universidad de
          Antioquia, actualmente estoy cursando el 8 semestre. Me considero una
          persona proactiva, organizada, responsable capaz de resolver cualquier
          problema de manera creativa.
        </p>
        <Boton
        className='bg-curri' text='Experiencia' handleClick={PerfilClick}/>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <Image
          src="/images/foto2.png"
          alt="Foto de perfil"
          width={200}
          height={200}
        />
      </div>
      <PerfilDialogo open={isDialogOpen} setOpen={setDialogOpen}/>
    </div>
  );
};

export { Perfil };

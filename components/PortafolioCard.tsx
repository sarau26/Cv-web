import Image from "next/image";
import { Boton } from "@/components/Boton";
import { PortafolioDialogo } from "@/components/Dialogos/PortafolioDialogo";
import { useState } from "react";

interface PortafolioProps {
  titulo: string;
  descripcion: string;
  ruta: string;
  alt: string;
  tituloPor: string;
  descripcionPor: string;
  linkRepo : string;
}

const PortafolioCard = ({
  titulo,
  descripcion,
  ruta,
  alt,
  tituloPor,
  descripcionPor,
  linkRepo,
}: PortafolioProps) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const PerfilClick = () => {
    setDialogOpen(true);
  };
  return (
    <div className="flex flex-col bg-white w-[270px] text-center py-2">
      <Image
        src={ruta}
        alt={alt}
        height={100}
        width={100}
        className="mx-auto"
      />
      <span className="font-semibold">{titulo}</span>
      <span className="text-gray-500">{descripcion}</span>
      <Boton className="text-curri" text="Leer más" handleClick={PerfilClick} />
      <PortafolioDialogo open={isDialogOpen} setOpen={setDialogOpen} titulo={tituloPor}
        descripcion={descripcionPor} linkRepo={linkRepo}/>
    </div>
  );
};

export { PortafolioCard };

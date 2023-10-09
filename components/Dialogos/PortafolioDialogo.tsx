import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Boton } from "@/components/Boton";
import { Dispatch, SetStateAction } from "react";
import { Experiencia } from "@/components/Experiencia";

interface PortafolioDialogoProps{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    titulo : string;
    descripcion: string;
    linkRepo : string;
}

const PortafolioDialogo = ({open, setOpen, titulo, descripcion,linkRepo}: PortafolioDialogoProps) =>{
    return(
        <Dialog open={open}>
            <DialogTitle>
            <span className="font-semibold">Proyecto</span> 
            </DialogTitle>
            <DialogContent className="bg-gray-300">
                <div className="py-4 flex flex-col px-2 gap-4">
                <p>{descripcion}</p>
                <p>{titulo}</p>
                <a
                    href={linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                    >
            Enlace al repositorio
          </a>
                <Boton
                text="Cerrar"
                handleClick={() =>{
                    setOpen(false);
                }} />
                </div>
                
            </DialogContent>
        </Dialog>
    );
}

export {PortafolioDialogo};
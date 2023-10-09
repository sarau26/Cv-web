import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Boton } from "@/components/Boton";
import { Dispatch, SetStateAction } from "react";
import { Experiencia } from "@/components/Experiencia";

interface PerfilDialogoProps{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const PerfilDialogo = ({open, setOpen}: PerfilDialogoProps) =>{
    return(
        <Dialog open={open}>
            <DialogTitle>
            <span className="font-semibold">Experiencia laboral</span> 
            </DialogTitle>
            <DialogContent className="bg-gray-300">
                <div className="py-4 flex flex-row px-2 gap-4">
                <Experiencia
                titulo="SOLUCIONES AKROS"
                descripcion="Desarrollar plataformas educativas para instituciones de Medellín."
                ruta="/images/educativa.png"
                alt="Imagen plataforma educativa"
                />
                <Experiencia
                titulo="KONECTA"
                descripcion="Desarrollar aplicaciones de CRM para mayor experiencia entre el agente y el usuario"
                ruta="/images/crm.png"
                alt="Imagen plataforma educativa"
                />
                </div>
                <div className="flex flex-col items-center">
                <Boton
                className="bg-white"
                text="Cerrar"
                handleClick={() =>{
                    setOpen(false);
                }} />
                </div>
                
            </DialogContent>
        </Dialog>
    );
}

export {PerfilDialogo};
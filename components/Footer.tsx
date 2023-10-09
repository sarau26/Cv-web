interface FooterProps {
    descripcion: string;
}


const Footer = ({descripcion}: FooterProps) => {
    return (
      <footer className="bg-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 {descripcion}</p>
          <p>Contacto: sara.uribez@udea.edu.co</p>
        </div>
      </footer>
    );
  };

export {Footer};
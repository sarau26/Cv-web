interface BotonProps{
    text: string;
    handleClick?: () => void;
    className?: string;
}

const Boton = ({text, className, handleClick = () => {}}: BotonProps) => {

    return (
      <button
      onClick={handleClick}
      className={`px-2 py-2 rounded ${className}`}>
        <span className="py-2 font-semibold">{text}</span>
      </button>
    );
  };

export {Boton};
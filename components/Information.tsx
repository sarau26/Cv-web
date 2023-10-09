interface CampoProps {
  nombre: string;
  valor: string;
}

const CampoInformacion = ({ nombre, valor }: CampoProps) => {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
              <span className="flex-1 text-left font-semibold text-sm text-right">{nombre}:</span>
          </div>
          <div className="ml-12 text-sm mb-0.5">
              {valor}
          </div>
      </div>
  );
};

export { CampoInformacion };
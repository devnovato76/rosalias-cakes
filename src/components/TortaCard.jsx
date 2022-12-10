import { Link } from "react-router-dom";

export const TortaCard = ({
  id,
  nombre,
  tipo,
  relleno,
  tamaño,
  bizcocho,
  pisos,
  cubierta,
}) => {
  const tortaImageUrl = `images/tortas/${id}.jpg`;
  return (
    <>
      <h2>{nombre}</h2>
      <div>
        <img src={tortaImageUrl} alt={nombre} />
      </div>

      <p>
        Bizcocho : <span>{bizcocho}</span>
      </p>
      <p>
        Relleno : <span>{relleno}</span>
      </p>
      <p>
        Pisos : <span>{pisos}</span>
      </p>
      <p>
        Tamaño : <span>{tamaño}</span> Personas Aproximadamente
      </p>
      <Link to={`/torta/${id}`}>Más...</Link>
    </>
  );
};

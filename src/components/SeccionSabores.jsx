import "../SeccionSabores.css";

export const SeccionSabores = () => {
  return (
    <section className="sabores">
      <div className="grid">
        <div className="span6 background"></div>

        <div className="span6">
          <div className="text-content lateral">
            <h1>NUESTROS SABORES</h1>
            <h3>¡Frescos y sabrosos!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              enim, deserunt id eum, dignissimos illo assumenda, voluptatum
              similique repellat praesentium tenetur non sint expedita itaque
              voluptatem aperiam a ut fugiat!
            </p>
            <button className="btn dark">Menú</button>
          </div>
        </div>
      </div>
    </section>
  );
};

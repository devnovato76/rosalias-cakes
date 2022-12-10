import "../GaleriaImagenes.css";

import bg1 from "../assets/imagenes_jpg/tarta_baby_tiburones.jpg.jpg";
import bg2 from "../assets/imagenes_jpg/tarta_botellas.jpg";
import bg3 from "../assets/imagenes_jpg/tarta_capitone.jpg.jpg";
import bg4 from "../assets/imagenes_jpg/tarta_frida.jpg.JPG";
import bg5 from "../assets/imagenes_jpg/tarta_morad.jpg.jpg";
import bg6 from "../assets/imagenes_jpg/tarta_rosas_rojas.jpg";
import bg7 from "../assets/bg7.jpg";

export const GaleriaImagenes = () => {
  return (
    <div className="contenedor">
      <div className="grid-container">
        <div className="item r-span2">
          <img src={bg1} alt="" />
        </div>

        <div className="item c-span2">
          <img src={bg2} alt="" />
        </div>

        <div className="item r-span2">
          <img src={bg3} alt="" />
        </div>

        <div className="item">
          <img src={bg4} alt="" />
        </div>

        <div className="item">
          <img src={bg5} alt="" />
        </div>

        <div className="item c-span2">
          <img src={bg6} alt="" />
        </div>

        <div className="item c-span2">
          <img src={bg7} alt="" />
        </div>
      </div>
    </div>
  );
};

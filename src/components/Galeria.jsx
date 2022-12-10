{/*import { useState } from "react";
import Slider from "react-slick";
import { Modal } from "./Modal";
import "../Modal.css";
import "../Slider.css";

import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import image1 from "../assets/image1.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

//const images = [astronaut, celebrating, education, taken];
const images = [image1, image4, image5, image6];

export const Galeria = () => {
  const [openModal, setOpenModal] = useState(false);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={img} alt={img} />
              <button
                onClick={() => setOpenModal(true)}
                className="modalButton"
              >
                Modal
              </button>
            </div>
          ))}
        </Slider>

        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <Footer />
    </>
  );
};

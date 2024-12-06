import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import sprite from "./sprite.svg";
import WhatsAppButton from "./WhatsAppButtonComponent.js"

// Import images from the local src directory
import img1 from "./mage1/1.png";
import img2 from "./mage1/2.png";

const images = [img1, img2];

function App() {
  return (
    <div className="box">
      <Carousel showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <svg>
                  <use xlinkHref={sprite + "#right"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <svg>
                  <use xlinkHref={sprite + "#left"}></use>
                </svg>
              </button>
            )
          );
        }}

      >
        {images.map((image, index) => (
          <div className="slide-box" key={index}>
            <img alt={`slide-${index}`} src={image} />
          </div>
        ))}
      </Carousel>
      <div className="info-box">
        <div className="important">
          <p>
            Favor confirmar asistencia o pedir más información con la Vale
          </p>
          <p>(Franco no cacha nada) &#128540;</p>
          <br/>
          <WhatsAppButton />
        </div>
        <div className="more-info">
          <ul className="list-info">
            <li>
              Para asegurar tu asistencia y estadía, pedimos una cuota de $15.000 por persona, esto nos ayuda para poder sobrevivir este gasto &#128517;
            </li>
            <li>
              Vestimenta: Opcional &#127882;
            </li>
            <li>
              Si llegan temprano o se van tarde habra piscina así que lleven sus cositas &#129343;  
            </li>
            <li>
              La ubicación por maps será entregada más adelante &#128506;
            </li>
          </ul>
        </div>
      </div>

    </div>

  );
}

export default App;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import sprite from "./sprite.svg";

// Import images from the local src directory
import img1 from "./mage1/1.png";
import img2 from "./mage1/2.png";

const images = [img1, img2];

function App() {
  return (
    <div className="box">
      <Carousel  showIndicators
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
    </div>
  );
}

export default App;


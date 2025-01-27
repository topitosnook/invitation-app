import React from "react";
import myPhoto from "./mage1/casa.png"; // Importa tu imagen

function PhotoSection() {
  return (
    <div className="photo-container">
      <img src={myPhoto} alt="Lugar de junta" className="photo" />
      <p className="photo-description">Lugar donde nos juntaremos</p>
    </div>
  );
}

export default PhotoSection;
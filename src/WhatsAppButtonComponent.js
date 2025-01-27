import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "56995242695"; 
  const message = "Kongfirmo"; 

  // Encode the message to handle spaces and special characters
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#21bd5b", // WhatsApp green color
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "20px", marginRight: "10px" }}
      />
      Kongfirmo via WhatsApp
    </a>
  );
};

export default WhatsAppButton;

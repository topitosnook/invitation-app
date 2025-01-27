import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function TransferDetails() {

    const [clickedIcon, setClickedIcon] = useState(null);

    const handleClick = (event) => {
        const textToCopy = event.currentTarget.getAttribute("data-copy");
        navigator.clipboard.writeText(textToCopy);
        setClickedIcon(event.currentTarget.getAttribute("data-id"));
        setTimeout(() => setClickedIcon(null), 500);
    };
    return (
        <div className="transfer-details">
            <h2>Datos de Transferencia</h2>
            <ul>
                <li>
                    <strong>Banco Estado | Cuenta Rut</strong>
                </li>
                <li>
                    <strong> </strong>
                </li>
                <li>
                    <strong>Nombre:</strong>
                    <span className="copyable"> Valeria Argomedo</span>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className={`copy-icon ${clickedIcon === "account-name" ? "clicked" : ""}`}
                        onClick={handleClick}
                        data-id="account-name"
                        title="Copiar nombre"
                        data-copy="Valeria Argomedo"
                    />
                </li>
                <li>
                    <strong>Rut:</strong>
                    <span className="copyable"> 17.619.406-5</span>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className={`copy-icon ${clickedIcon === "account-number" ? "clicked" : ""}`}
                        onClick={handleClick}
                        title="Copiar rut"
                        data-copy="176194065"
                        data-id="account-number"
                    />
                </li>

                <li>
                    <strong>Correo:</strong>
                    <span className="copyable"> valeria.argomedo@gmail.com</span>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className={`copy-icon ${clickedIcon === "account-email" ? "clicked" : ""}`}
                        onClick={handleClick}
                        data-id="account-email"
                        title="Copiar correo"
                        data-copy="valeria.argomedo@gmail.com"
                    />
                </li>
            </ul>
        </div>
    );
}

export default TransferDetails;

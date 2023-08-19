import React, { useState } from "react";
import '../../styles/index.css'

const Semaforo = () => {

    const [color, setColor] = useState("rojo")

    const seleccionarColor = (color) => {
        setColor(color)
    }

    const cambiarColor = () => {
        switch (color) {
            case "rojo":
                setColor("amarillo")
                break;
            case "amarillo":
                setColor("verde")
                break;
            case "verde":
                setColor("rojo")
                break;
        }
    }

	return (
        <>
            <div className="semaforo">
                <div className={"rojo" + (color == "rojo" ? " brillo" : "")} onClick={() => seleccionarColor("rojo")}></div>
                <div className={"amarillo" + (color == "amarillo" ? " brillo" : "")} onClick={() => seleccionarColor("amarillo")}></div>
                <div className={"verde" + (color == "verde" ? " brillo" : "")}  onClick={() => seleccionarColor("verde")}></div>
            </div>
            <button className="btn btn-primary" onClick={() => cambiarColor()}>Cambiar color seleccionado</button>
		</>
	);
};

export default Semaforo;

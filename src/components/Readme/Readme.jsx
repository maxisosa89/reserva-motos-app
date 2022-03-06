import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Readme.css"

export default function Readme(){
    
    return (
        <div>

            <Navbar />
            <div className="container">
                <h1>Readme</h1>
                <ul>
                    <li>Contruye una lista que contenga tramos horarios en intervalos de 30 minutos.</li>
                    <li>Que empiece a las 8 am y termine a las 8 pm.</li>
                    <li>La empresa tiene una disponibilidad de 8 motociclistas cada 30 minutos.</li>
                    <li>Cuando alguien haga click en "Reservar" en un horario, deberá reservar un motociclista (descontar uno de los 8 disponibles), y se pondrá la caja en verde.</li>
                    <li>Si hace click en "Liberar", debe liberarse la moto y volver a estar disponible para reservar.</li>
                    <li>Si todas las motos fueron reservadas, la caja debe aparecer en rojo.</li>
                </ul>
            </div>
        </div>
    )
}
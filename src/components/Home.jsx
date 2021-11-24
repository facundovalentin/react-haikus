import React from "react";

import "./Home.css";
import Tarjeta from "./Tarjeta";

const Home = () => {
    return(
    <>
        <p className="centrado"> Victoriano Arenas</p>
        <h2> Colección </h2>
        <h4 className="H4"></h4>
        <div id="contenedorTarjetas">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
        </>
    );
};

export default Home;
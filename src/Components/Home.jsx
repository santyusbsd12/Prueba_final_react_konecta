import React, { useContext } from "react";
import "../Themes/Home.scss";

import Quote from "./Quote";

import { GlobalContext } from "../Contexto/Contexto";
import HistoryActivity from "./HistoryActivity";

/**
 Este componente sirve para mostrar la imagen del personaje junto con una frase aleatoria
 obtenida del componente Quote
 */

const Home = () => {
  // GLOBAL CONTEXT - STORAGE
  const { person, quote } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card home__contenedor-principal">
            <div className="row g-0">
              <div className="col-md-5 home__contenedor-imagen">
                <img
                  src={person.img}
                  alt={person.name}
                  style={{ width: "100%" }}
                  className="home__imagen"
                />
              </div>
              <br />
              <div className="col-md-7">
                <div className="card-body">{quote && <Quote />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <HistoryActivity />
        </div>
      </div>
    </>
  );
};

export default Home;

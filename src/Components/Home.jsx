import React, { useContext } from "react";
import "../Themes/Home.scss";

import Quote from "./Quote";

import { GlobalContext } from "../Contexto/Contexto";

const Home = () => {
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
    </>
  );
};

export default Home;

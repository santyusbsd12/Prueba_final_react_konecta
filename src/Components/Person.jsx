import React from "react";
import PropTypes from "prop-types";

/**
 Este componente sirve para mostrar cada uno de los personajes con su informacion
 de forma individual, este componente es usado en el componente PersonList y se 
 muestran todos los personajes con informacion caracteristica.
 */

const Person = ({ personajeIt }) => {
  return (
    <>
      <div
        className="card mb-3 w-30 mt-3 mx-1 d-flex justify-content-center text-center"
        style={{ width: "500px", margin: "5px" }}
      >
        <div className="row">
          <div className="col-md-4">
            <img
              src={personajeIt.img}
              alt={personajeIt.name}
              style={{ width: "180px" }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title h3">{personajeIt.name}</h5>
              <br />
              <p className="card-text">
                <span>Nickname: </span>
                <span className="h5">{personajeIt.nickname}</span>
              </p>
              <p className="card-text">
                <span>Birthday: </span>
                <span className="h5">{personajeIt.birthday}</span>
              </p>
              <p className="card-text">
                <span>Portrayed: </span>
                <span className="h5">{personajeIt.portrayed}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Person.propTypes = {
  personajeIt: PropTypes.object,
};

export default Person;

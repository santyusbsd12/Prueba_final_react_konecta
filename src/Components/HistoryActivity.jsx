import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 Este componente sirve para mostrar el historial de comentarios y tener la funcionalidad para 
 eliminar el comentario
 */

const HistoryActivity = () => {
  
  const { historyComentary, deleteComentary } = useContext(GlobalContext);

  return (
    <div className="container pt-3">
      <div className="row d-flex justify-content-center">
        <div
          className="card text-center"
          style={{ width: "97%", margin: "10px" }}
        ></div>
      </div>

      <div className="row bg-dark px-3 rounded mx-1 mb-3">
        <div className="col text-center">
          <p className="badge bg-warning fs-4 mt-3 text-center">Comentaries</p>
          <ul className="list-group">
            {historyComentary.length > 0 ? (
              historyComentary.map((comentary, index) => (
                <li
                  key={index}
                  className="text-center d-flex justify-content-center"
                >
                  <div
                    className="bg-light w-100 rounded border border-danger mb-3 d-flex justify-content-center"
                    style={{ width: "100%" }}
                  >
                    <div className="card-body text-primary">
                      <h5 className="card-title h6">
                        Date: {comentary.dateTime}
                      </h5>
                      <h5 className="card-title h6">
                        Time: {comentary.hourTime}
                      </h5>
                      <p
                        className="card-text text-center"
                        style={{ color: "black" }}
                      >
                        {comentary.coment}
                      </p>
                      <button
                        className="btn bg-danger text-light"
                        onClick={() => deleteComentary(comentary.coment)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className="alert alert-light" role="alert">
                There are not comentaries
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryActivity;

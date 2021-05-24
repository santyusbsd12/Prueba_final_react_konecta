import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Quote from "./Liked";

const HistoryActivity = () => {
  const { quote, historyComentary, deleteComentary } = useContext(GlobalContext);

  return (
    <div className="container pt-3">
      <div className="row d-flex justify-content-center">
        <div
          className="card text-center"
          style={{ width: "97%", margin: "10px" }}
        >
          <div className="card-body">
            <h5 className="card-title">{quote && quote.author}</h5>
            <p className="card-text">{quote && quote.quote}</p>
          </div>
        </div>
      </div>

      <div className="row bg-dark px-3 rounded mx-1 mb-3">
        <p className="badge bg-primary fs-4 mt-3">Activity History</p>

        <div className="col-lg-8 text-center">
          <p className="badge bg-warning fs-4 mt-3 text-center">Comentaries</p>
          <ul className="list-group">
            {historyComentary.map((comentary) => (
              <li
                key={comentary.id}
                className="text-center d-flex justify-content-center"
              >
                <div
                  className="bg-light w-100 rounded border border-danger mb-3"
                  style={{ width: "18rem" }}
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
                      Comment: <br />
                      {comentary.coment}
                    </p>
                    <button className="btn bg-danger text-light" onClick={() => deleteComentary(comentary.coment)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-4 d-flex justify-content-center">
          <Quote quote={quote} />
        </div>
      </div>
    </div>
  );
};

export default HistoryActivity;

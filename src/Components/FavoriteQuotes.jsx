import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalContext } from "../Contexto/Contexto";

/**
 Este componente sirve para renderizar la lista de frases favoritas guardadas en el state
 favoriteList, este componente es quien las muestra
 */

const FavoriteQuotes = () => {
  const { 
    /* FAVORITE MANAGER -->*/ favoriteList, 
    /* FUNCTION DELETE -->*/ deleteQuote 
  } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="container text-center mt-3 pt-4">
        <span className="bg-warning text-light mark h2 p-3 rounded">
          Your favorite quotes
        </span>
      </div>
      <ul className="list-group mt-5 mb-4">
        {favoriteList.length > 0 ? (
          favoriteList.map((favorite) => (
            <li
              className="list-group-item my-1 border border-danger"
              key={favorite.id}
            >
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{favorite.author}</h5>
                  <p className="card-text">{favorite.quote}</p>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteQuote(favorite.quote)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="alert alert-info text-center" role="alert">
            No favorite quotes added
          </div>
        )}
      </ul>
    </div>
  );
};

export default FavoriteQuotes;

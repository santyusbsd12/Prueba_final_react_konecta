import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SaveConfirmed from "./SaveConfirmed";
import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Este componente se encarga de renderizar la lista de frases de diversos personajes
 * en este listado el usuario puede dar like, dislike o guardar la frase de su preferencia en
 * la lista de favoritos
 */

const OtherQuotes = () => {
  const {
    /*PERSONS AND QUOTES MANAGER*/
    allQuotes,

    /*FAVORITE MANAGER*/
    isFavoriteAllQuotesFunction,

    /*CALIFICATION SISTEM*/
    allQuoteLike,
    allQuoteDislike,
  } = useContext(GlobalContext);

  return (
    <div className="container">
      <ul className="list-group">
        {allQuotes.map((quo) => (
          <li key={quo.quote_id} className="list-group-item bg-dark">
            <div className="card border-info mb-3">
              <div className="card-body">
                <h5 className="card-title">{quo.author}</h5>
                <p className="card-text">{quo.quote}</p>
                <div className="bd-danger">
                  {/* Favorite button */}
                  <button
                    className="btn"
                    onClick={() =>
                      isFavoriteAllQuotesFunction(
                        quo.quote_id,
                        quo.quote,
                        quo.author
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                  </button>

                  {/* Like button */}
                  <button
                    className="btn"
                    onClick={() => allQuoteLike(quo.quote_id)}
                  >
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ color: "blue" }}
                    />
                  </button>
                  {quo.like}

                  {/* Dislike button */}
                  <button
                    onClick={() => allQuoteDislike(quo.quote_id)}
                    className="btn"
                  >
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{ color: "orange" }}
                    />
                  </button>
                  {quo.dislike}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherQuotes;

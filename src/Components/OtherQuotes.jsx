import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Este componente se encarga de renderizar la lista de frases de diversos personajes
 */

const OtherQuotes = () => {
  // GLOBAL CONTEXT - STORAGE
  const {
    allQuotes,
    changeCalificationModeGood,
    changeCalificationModeBad,
    isFavoriteAllQuotesFunction,
    goodCounter,
    badCounter,
  } = useContext(GlobalContext);
  return (
    <div className="container">
      <ul className="list-group">
        {allQuotes.map((quote) => (
          <li key={quote.quote_id} className="list-group-item bg-dark">
            <div className="card border-info mb-3">
              <div className="card-body">
                <h5 className="card-title">{quote.author}</h5>
                <p className="card-text">{quote.quote}</p>
                <div className="bd-danger">
                  <button
                    className="btn"
                    onClick={() =>
                      isFavoriteAllQuotesFunction(
                        quote.quote_id,
                        quote.quote,
                        quote.author
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                  </button>

                  <button onClick={changeCalificationModeGood} className="btn">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ color: "blue" }}
                    />
                  </button>
                  <span>{goodCounter}</span>

                  <button onClick={changeCalificationModeBad} className="btn">
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{ color: "orange" }}
                    />
                  </button>
                  <span>{badCounter}</span>
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

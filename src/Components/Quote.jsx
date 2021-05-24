import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import SaveConfirmed from "./SaveConfirmed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

/**
 Este componente sirve para mostrar todas las frases aleatorias que se obtienen de la API,
 tambien es quien se encarga de la funcionalidad para dar likes, comentar 
 y agregar favoritos
 */

const Quote = () => {
  // GLOBAL CONTEXT - STORAGE
  const {
    quote,
    nextQuoteFunction,
    changeCalificationModeGood,
    calificationModGood,
    changeCalificationModeBad,
    calificationModBad,
    setComentary,
    comentary,
    saveComentary,
    saveConfirmed,
    isFavoriteFunction,
    isFavorite,
  } = useContext(GlobalContext);
  return (
    <>
      <h5 className="card-title h1">{quote.author}</h5>
      <p className="card-text h5">{quote.quote}</p>
      <p className="card-text h5">{quote.quote_id}</p>
      <div className="d-grid gap-2">
        <div className="row">
          <div className="col">
            <button
              className="btn mb-2"
              onClick={() =>
                isFavoriteFunction(quote.quote_id, quote.quote, quote.author)
              }
            >
              {isFavorite ? (
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </button>
            <span> Save to favorites</span>
            {/* <button onClick={changeCalificationModeGood} className="btn">
              {calificationModGood ? (
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue" }} />
              ) : (
                <FontAwesomeIcon icon={faThumbsUp} />
              )}
            </button>
            <span> I like</span>
            <br />

            <button onClick={changeCalificationModeBad} className="btn">
              {calificationModBad ? (
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  style={{ color: "orange" }}
                />
              ) : (
                <FontAwesomeIcon icon={faThumbsDown} />
              )}
            </button>
            <span> I don't like</span> */}
          </div>
          <div className="container">
            <div className="d-grid gap-2">
              <button className="btn btn-success" onClick={nextQuoteFunction}>
                Next quote
              </button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <p className="badge bg-primary fs-4 mt-3 text-center">
                Comentaries
              </p>
              <form action="">
                <textarea
                  type="text"
                  placeholder="Comentary"
                  className="form-control"
                  onChange={(e) => setComentary(e.target.value)}
                  value={comentary}
                  maxLength="400"
                  rows="7"
                ></textarea>
                <div className="d-grid gap-2 mt-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={saveComentary}
                  >
                    Save comentary
                  </button>
                </div>
              </form>
            </div>
          </div>

          {saveConfirmed ? <SaveConfirmed /> : null}
        </div>
      </div>
    </>
  );
};

export default Quote;

import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import SaveConfirmed from "./SaveConfirmed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/**
 Este componente sirve para mostrar todas las frases aleatorias que se obtienen de la API,
 tambien es quien se encarga de la funcionalidad para dar likes, comentar 
 y agregar favoritos
 */

const Quote = () => {
  const {
    /*PERSONS AND QUOTES MANAGER*/
    quote,
    nextQuoteFunction,

    /*HISTORY COMENTARIES*/
    setComentary,
    comentary,
    saveComentary,
    saveConfirmedComentary,

    /*FAVORITE MANAGER*/
    isFavoriteFunction,
    isFavorite,
  } = useContext(GlobalContext);
  return (
    <>
      <h5 className="card-title h1">{quote.author}</h5>
      <p className="card-text h5">{quote.quote}</p>
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

          {saveConfirmedComentary ? <SaveConfirmed /> : null}
        </div>
      </div>
    </>
  );
};

export default Quote;

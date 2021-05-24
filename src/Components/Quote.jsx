import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalContext } from "../Contexto/Contexto";
import SaveConfirmed from "./SaveConfirmed";

const Liked = () => {
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
      <div className="d-grid gap-2">
        <br />
        <button className="btn btn-success" onClick={nextQuoteFunction}>
          Next quote
        </button>
        <div className="row mt-5">
          <div className="col">
            <button
              className="btn"
              onClick={() => isFavoriteFunction(quote.quote, quote.author)}
            >
              {isFavorite ? (
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </button>
            <span> Guardar la frase actual en favoritos</span>
            <br />
            <button onClick={changeCalificationModeGood} className="btn">
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
            <span> I don't like</span>
          </div>

          <div className="row mt-2">
            <div className="col text-center">
              <p className="badge bg-primary fs-4 mt-3 text-center">
                Comentaries
              </p>
              <form action="">
                <input
                  type="text"
                  placeholder="Comentary"
                  className="form-control"
                  onChange={(e) => setComentary(e.target.value)}
                  value={comentary}
                />
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

export default Liked;

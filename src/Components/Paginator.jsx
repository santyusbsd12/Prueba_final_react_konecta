import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";

/**
 Este componente sirve para mostrar realizar la funcionalidad del paginador
 en el componente personList
 */

const Paginator = () => {

  // GLOBAL CONTEXT - STORAGE
  const { nextPageFunction, previousPageFunction, pageCounter } =
    useContext(GlobalContext);

  return (
    <div className="container d-flex justify-content-center pt-3">
      <nav aria-label="Page navigation example ">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={previousPageFunction}>
              &laquo;
            </button>
          </li>
          <p className="text-primary page-link mx-1">Pagina: {pageCounter}</p>
          <li className="page-item">
            <button className="page-link" onClick={nextPageFunction}>
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;

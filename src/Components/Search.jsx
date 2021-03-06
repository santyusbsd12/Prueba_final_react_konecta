import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";

/**
 Este componente sirve para albergar la busqueda filtro de los
 nombres de los personajes en la lista del componente PersonsList.jsx
 */

const Search = () => {
  
  const { setInputFilter } = useContext(GlobalContext);

  return (
    <div className="row text-center d-flex justify-content-center">
      <div className="col mt-3">
        <form className="form-group d-inline-flex">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search person"
            onChange={(e) => setInputFilter(e.target.value.toLowerCase())}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;

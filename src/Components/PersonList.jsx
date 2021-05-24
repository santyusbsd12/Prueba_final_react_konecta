import React, { useContext } from "react";

import { GlobalContext } from "../Contexto/Contexto";
import Paginator from "./Paginator";
import Person from "./Person";
import Search from "./Search";


/**
 Este componente sirve para iterar la lista de personajes y 
 albergar el buscador por filtro
 */

const PersonList = () => {
  // GLOBAL CONTEXT - STORAGE
  const { personList, inputFilter, searchingNameFilter } = useContext(GlobalContext);

  return (
    <div className="container w-100">
      <Search />

      <div className="row">
        <ul className="list/group d-flex flex-wrap justify-content-center">
          {personList.filter(searchingNameFilter(inputFilter)).map((personajeIt) => (
            <Person personajeIt={personajeIt} key={personajeIt.char_id} />
            
          ))}
        </ul>
      </div>

      <Paginator />
    </div>
  );
};



export default PersonList;

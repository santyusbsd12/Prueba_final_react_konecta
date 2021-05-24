import React, { useContext } from "react";

import { GlobalContext } from "../Contexto/Contexto";
import Paginator from "./Paginator";
import Person from "./Person";
import Search from "./Search";

const PersonList = () => {
  const { personList, inputFilter, searchingTheme } = useContext(GlobalContext);

  return (
    <div className="container w-100">
      <Search />

      <div className="row">
        <ul className="list/group d-flex flex-wrap justify-content-center">
          {personList.filter(searchingTheme(inputFilter)).map((personajeIt) => (
            <Person personajeIt={personajeIt} key={personajeIt.char_id} />
          ))}
        </ul>
      </div>

      <Paginator />
    </div>
  );
};

export default PersonList;

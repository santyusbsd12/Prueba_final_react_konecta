import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Contexto/Contexto";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCheckDouble,
  faJournalWhills,
  faStar,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";

/**
 Este componente sirve para administrar la barra de navegacion y redirigir la vista a cada uno de 
 los componentes.
 */

const Header = () => {
  // GLOBAL CONTEXT - STORAGE
  const { reReadQuotes } = useContext(GlobalContext);

  return (
    <div className="container text-center mt-2">
      <img
        src={logo}
        alt="Breaking bad"
        style={{ width: "100px" }}
        className="d-inline-block align-text-top"
      />
      <div className="d-flex flex-row flex-wrap justify-content-center bd-highlight p-3">
        <Link className="btn" to="/" onClick={reReadQuotes}>
          <div className="p-2 bd-highlight h1 text-light mx-1">
            <FontAwesomeIcon icon={faCheckDouble} /> <br /> Quotes
          </div>
        </Link>

        <Link className="btn" to="/personList">
          <div className="p-2 bd-highlight h1 text-light mx-1">
            <FontAwesomeIcon icon={faUsers} /> <br /> List
          </div>
        </Link>
        <Link className="btn" to="/favoriteQuotes">
          <div className="p-2 bd-highlight h1 text-light mx-1">
            <FontAwesomeIcon icon={faStar} /> <br /> Favorites
          </div>
        </Link>
        <Link className="btn" to="/otherQuotes">
          <div className="p-2 bd-highlight h1 text-light mx-1">
            <FontAwesomeIcon icon={faFireAlt} /> <br /> other quotes
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

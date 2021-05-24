import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Contexto/Contexto";

import logo from "../assets/logo.png";

const Header = () => {
  const { reReadQuotes } = useContext(GlobalContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-md">
          <img src={logo} alt="Breaking bad" style={{ width: "100px" }} />
          <Link
            className="navbar-brand text-light"
            to="/"
            onClick={reReadQuotes}
          >
            Frases geniales
          </Link>

          <Link
            className="navbar-brand text-light"
            to="/history"
          >
            Hitorial de actividad
          </Link>

          <Link className="navbar-brand text-light" to="/personList">
            Listado de personajes
          </Link>
          <Link className="navbar-brand text-light" to="/favoriteQuotes">
            Frases favoritas
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;

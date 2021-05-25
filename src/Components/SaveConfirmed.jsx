import React, { useContext } from "react";
import { GlobalContext } from "../Contexto/Contexto";
import PropTypes from "prop-types";

/**
 Este componente sirve para mostrar mostrar un mensaje de confirmacion al
 agregar un comentario o al guardar una frase del componente OtherQuotes.jsx
 en la lista de favoritos
 */

const SaveConfirmed = ({ menssageFavorite }) => {
  const { saveConfirmedFavorite } = useContext(GlobalContext);

  return (
    <div className="container mt-3">
      <div className="alert alert-success text-center" role="alert">
        <p className="h2 text-center">Saved!</p>
        {saveConfirmedFavorite ? menssageFavorite : null}
      </div>
    </div>
  );
};

SaveConfirmed.propTypes = {
  menssageFavorite: PropTypes.string.isRequired,
};

export default SaveConfirmed;

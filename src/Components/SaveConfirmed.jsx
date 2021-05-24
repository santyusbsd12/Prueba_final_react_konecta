import React from "react";

/**
 Este componente sirve para mostrar mostrar un mensaje de confirmacion de
 agregar un comentario
 */

const SaveConfirmed = () => {
  return (
    <div className="container mt-3">
      <div className="alert alert-success text-center" role="alert">
        <p className="h2 text-center">Congratulations!</p>
        Comment saved!
      </div>
    </div>
  );
};

export default SaveConfirmed;

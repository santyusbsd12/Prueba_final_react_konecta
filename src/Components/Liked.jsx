import React, { useContext } from "react";

import { GlobalContext } from "../Contexto/Contexto";

const Quote = () => {
  const { goodCounter, badCounter } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="coontainer">
        <div className="row">
          <div className="col text-center">
            <p className="badge bg-warning fs-4 mt-3">History likes</p>
            <table className="table table-dark text-center">
              <tbody>
                <tr>
                  <td>Me gusta</td>
                  <td>{goodCounter}</td>
                </tr>
                <tr>
                  <td>No me gusta</td>
                  <td>{badCounter}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quote;

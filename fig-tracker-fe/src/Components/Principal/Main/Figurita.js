import {useState} from "react";
import "./Figurita.css";

function Figurita({id, nombre, img, pais}) {
  const [tengo, setTengo] = useState(0);

  const borrar = () => {
    if (tengo === 0) {
      return;
    } else {
      setTengo(tengo - 1);
    }
  };

  const agregar = () => {
    setTengo(tengo + 1);
  };

  return (
    <div className="figurita figuritgrid">
      <span className="figid">id {id}</span>
      <h3 className="figname">{nombre}</h3>
      <img className="figimg" src={img} />
      <span className="figpais">{pais}</span>
      <button
        className="figmenos"
        onClick={borrar}
        disabled={tengo === 0 ? true : false}>
        -
      </button>
      <button className="figmas" onClick={agregar}>
        +
      </button>
      <p className="figtengo">Tengo: {tengo}</p>
    </div>
  );
}

export default Figurita;

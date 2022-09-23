import {useState} from "react";
import "./Figurita.css";

function Figurita({id, nombre, img, pais, repetidas, pj, setX}) {
  const borrar = () => {
    if (pj.repetidas !== 0) {
      fetch(`http://127.0.0.1:5433/figuritas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tengo: true,
          repetidas: pj.repetidas - 1,
        }),
      })
        .then((r) => {
          return r.json();
        })
        .then(function (resJSON) {
          setX((x) => {
            return x + 1;
          });
        });
    } else {
      fetch(`http://127.0.0.1:5433/figuritas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tengo: false,
          repetidas: 0,
        }),
      })
        .then((r) => {
          return r.json();
        })
        .then(function (resJSON) {
          setX((x) => {
            return x + 1;
          });
        });
    }
  };

  const agregar = (id, pj) => {
    fetch(`http://127.0.0.1:5433/figuritas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tengo: true,
        repetidas: pj.repetidas + 1,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((resJSON) => {
        setX((x) => {
          return x + 1;
        });
      });
  };

  return (
    <div className="figurita figuritgrid">
      <span className="figid">id {id}</span>
      <h3 className="figname">{nombre}</h3>
      {/* <img className="figimg" src={img} alt={nombre} /> */}
      <span className="figpais">{pais}</span>
      <button
        className="figmenos"
        onClick={borrar}
        disabled={repetidas === 0 ? true : false}>
        -
      </button>
      <button className="figmas" onClick={() => agregar(id, pj)}>
        +
      </button>
      <p className="figtengo">Tengo: {repetidas !== 0 ? repetidas : 0}</p>
    </div>
  );
}

export default Figurita;

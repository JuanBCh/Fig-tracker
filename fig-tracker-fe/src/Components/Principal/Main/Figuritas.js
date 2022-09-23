import {useEffect} from "react";
import Figurita from "./Figurita";
import "./Figuritas.css";

function Figuritas(props) {
  let paises = [
    {codigo: "ARG", nombre: "Argentina"},
    {codigo: "URU", nombre: "Uruguay"},
    {codigo: "BR", nombre: "Brasil"},
  ];

  return (
    <>
      {paises.map((pais, k) => {
        return (
          <div key={k}>
            <h2>Pais: {pais.nombre}</h2>
            <div className="div-paises">
              {props.jugadores.map((jug, k) => {
                if (jug.categoria === pais.codigo) {
                  return (
                    <Figurita
                      key={k}
                      id={jug.id}
                      nombre={jug.nombre}
                      img={jug.img}
                      pais={jug.categoria}
                      repetidas={jug.repetidas}
                      pj={jug}
                      setX={props.setX}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Figuritas;

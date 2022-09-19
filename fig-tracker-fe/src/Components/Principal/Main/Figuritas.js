import Figurita from "./Figurita";

function Figuritas(props) {
  let paises = ["uru", "arg", "port"];
  for (let i=0; i<paises.length; i++){
  let jugadorPorPais = []
  jugadorPorPais.push(props.jugadores.filter(jugador=>jugador.pais==paises[i]));
}

  let devolver = (<div>
    <h2>Pais: {jugadorPorPais.pais}</h2>
    {jugadorPorPais.map((jug, k) => {
      return (
        <Figurita
          key={k}
          id={jug.id}
          nombre={jug.nombre}
          img={jug.img}
          pais={jug.categoria}
        />
      );
    })}
  </div>)

  return (
    devolver
    // <div>
    //   <h2>Pais: {jugadorPorPais.pais}</h2>
    //   {jugadorPorPais.map((jug, k) => {
    //     return (
    //       <Figurita
    //         key={k}
    //         id={jug.id}
    //         nombre={jug.nombre}
    //         img={jug.img}
    //         pais={jug.categoria}
    //       />
    //     );
    //   })}
    // </div>
  );

export default Figuritas;

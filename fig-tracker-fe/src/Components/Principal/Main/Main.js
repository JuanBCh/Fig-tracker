import Figuritas from "./Figuritas";

function Main({jugadores, setX}) {
  return (
    <div>
      <Figuritas jugadores={jugadores} setX={setX} />
    </div>
  );
}

export default Main;

import {useEffect, useState} from "react";
import "./App.css";
import Header from "./Components/Principal/Header/Header";
import Main from "./Components/Principal/Main/Main";

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [x, setX] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5433/figuritas")
      .then((res) => res.json())
      .then((results) => {
        setJugadores(results);
      });
  }, [x]);

  return (
    <div className="App">
      <Header />
      <Main jugadores={jugadores} setX={setX} />
    </div>
  );
}

export default App;

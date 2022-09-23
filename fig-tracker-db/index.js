const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const figuritas = require("./controllers/figuritas");
const afterResponse = require("./middlewares/afterResponse");
const auth = require("./controllers/auth");
// const {validateJWT} = require("./middlewares/jwt");

app.get("/figuritas", figuritas.getAll, afterResponse.afterResponse);
app.get("/users", figuritas.getUsers);
app.get("/figuritas/:id", figuritas.getById, afterResponse.afterResponse);
app.get(
  "/figuritas/pais/:categoria",
  figuritas.getByCategoria,
  afterResponse.afterResponse
);
app.post("/figuritas", figuritas.addFig, afterResponse.afterResponse);
app.put("/figuritas/:id", figuritas.addFigurita, afterResponse.afterResponse);

app.delete("/figuritas/:id", figuritas.delete, afterResponse.afterResponse);

app.use("/auth", auth); //Esto es por el Router
app.listen(5433, () => {
  console.log("Escuchando 5433");
});

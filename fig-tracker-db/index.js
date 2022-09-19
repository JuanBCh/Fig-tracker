const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const figuritas = require("./controllers/figuritas");
const afterResponse = require("./middlewares/afterResponse");

app.get("/figuritas", figuritas.getAll, afterResponse.afterResponse);
app.get("/figuritas/:id", figuritas.getById, afterResponse.afterResponse);
app.get(
  "/figuritas/pais/:categoria",
  figuritas.getByCategoria,
  afterResponse.afterResponse
);
app.post("/figuritas", figuritas.addFig, afterResponse.afterResponse);
app.delete("/figuritas/:id", figuritas.delete, afterResponse.afterResponse);

app.listen(5433, () => {
  console.log("Escuchando 5432");
});

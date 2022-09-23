const router = require("express").Router();
const jwt = require("jsonwebtoken");
const {SECRET} = require("../middlewares/jwt");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "251198Abc",
    database: "fig-tracker",
  },
});

const bcrypt = require("bcrypt");

router.post("/register", (req, res, next) => {
  const salt = bcrypt.genSaltSync(10); //tambien funciona con un = async bcrypt.genSalt(). El numero es cono el esfuerzo que va a tener en encriptar
  const pwd = bcrypt.hashSync(req.body.pass, salt); // esto nos genera la password ya encriptada

  knex("users")
    .returning(["id", "nombre", "pass"])
    .insert({
      nombre: req.body.nombre,
      pass: pwd,
    })
    .then((r) => {
      res.status(201).json(r[0]);
    })
    .catch((err) => {
      res.status(500).send("error");
    })
    .finally(() => {
      next();
    });
});

router.post("/login", (req, res, next) => {
  knex
    .select("*")
    .from("users")
    .where("nombre", req.body.nombre)
    .then((r) => {
      if (r.length > 0) {
        if (bcrypt.compareSync(req.body.pass, r[0].pass)) {
          res.status(200).json({
            msg: "logeado",
            auth_token: jwt.sign(
              {
                id: r[0].id,
                nombre: r[0].nombre,
                texto_random: "Hello world!",
              },
              SECRET
            ),
          });
        } else {
          res.status(404).json({msg: "Mail o pass incorrectos"});
        }
      } else {
        res.status(404).json({msg: "Mail incorrecto"});
      }
    })
    .catch((err) => {
      res.status(500).send("error");
    })
    .finally(() => {
      next();
    });
});


module.exports = router;

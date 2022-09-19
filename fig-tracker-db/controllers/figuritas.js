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

exports.getAll = (req, res, next) => {
  knex
    .select("*")
    .from("figurita")
    .then((r) => {
      res.status(200).json(r);
      console.log(res);
    })
    .catch((err) => {
      res.status(500).send("wtf");
    })
    .finally(() => {
      next();
    });
};

exports.getById = (req, res, next) => {
  const id = req.params.id;

  knex
    .select("*")
    .from("figurita")
    .where("id", id)
    .then((r) => {
      res.status(200).json(r[0]);
      console.log(res);
    })
    .catch((err) => {
      res.status(500).send("wtf");
    })
    .finally(() => {
      next();
    });
};

exports.getByCategoria = (req, res, next) => {
  const categoria = req.params.categoria;

  knex
    .select("*")
    .from("figurita")
    .where("categoria", categoria)
    .then((r) => {
      res.status(200).json(r);
      console.log(res);
    })
    .catch((err) => {
      res.status(500).send("palsplas");
    })
    .finally(() => {
      next();
    });
};

exports.addFig = (req, res, next) => {
  const newFig = req.body;
  console.log(newFig);

  knex("figurita")
    .insert({
      nombre: newFig.nombre,
      categoria: newFig.pais,
      img: newFig.img,
      tengo: newFig.tengo,
      repetidas: newFig.repetidas,
    })
    .then((r) => {
      res.status(201).json({msj: "Figurita añadida al album"});
    })
    .catch((err) => {
      res.status(500).send("fh");
    })
    .finally(() => {
      next();
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  knex
    .select("*")
    .from("figurita")
    .where("id", id)
    .then((r) => {
      res.status(202).json({msj: "Figurita borrada"});
    })
    .catch(() => {
      res.status(500).json({msj: "Mala mia"});
    })
    .finally(() => {
      next();
    });
};

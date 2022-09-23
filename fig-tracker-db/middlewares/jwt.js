exports.SECRET = "packagesarelookingforfunding";

const jwt = require("jsonwebtoken");
exports.validateJWT = (req, res, next) => {
  const token = req.header("auth_token");
  if (!token) {
    res.status(401).json({msg: "No token found in auth_token header"});
  }
  jwt.verify(token, exports.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({msg: "Invalid token"});
    }
    console.log(decoded);

    const fecha = decoded.iat; // Esta es la fecha y hora que se creo el token
    let ahora = new Date(); // Esta es la fecha y hora de el momento q se corra el codigo
    let dif = (ahora.getTime() - fecha); // Esto nos puede servir para darle un tiempo de caducidad al token
  });

  console.log(`token: ${token}`);

  next();
};

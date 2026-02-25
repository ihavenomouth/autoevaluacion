import  jwt from "jsonwebtoken";


function verify(req, res, next){

  const token = req.cookies.token;

  if(!token){
    res.status(401).send("No se pudo realizar la autenticación. Falta el token.");
    return;
  }

  jwt.verify(token, process.env.CLAVE_TOKEN, function(err, decoded) {
    if(err){
      res.status(401).send("No se pudo realizar la autenticación. ¿La clave es correcta?");
      return;
    }

    req.id = decoded.id;
    req.email = decoded.email; // FIXME: Habría que comprobar si existe un usuario con ese email
    req.admin = decoded.admin;

    next();
  });

  return;
  
}

export default verify;

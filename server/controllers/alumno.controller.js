import AlumnoModel from "../models/alumno.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";



class AlumnoController {

  static getAlumnos(req, res) {
    const alumnos = AlumnoModel.getAlumnos();
    console.log(alumnos);
    res.send(alumnos);
  }


  static getAlumnoByEmail(req, res) {
    //FIXME: validación
    const email = req.params.email;
    const alumno = AlumnoModel.getAlumnoByEmail(email);
    if (alumno)
      res.send(alumno);
    else
      res.status(404).send("No existe el alumno con email " + email);
  }




  static async createAlumno(req, res) {
    //FIXME: validación
    const { nombre, email, clave, id_curso, id_grupo } = req.body;

    try {
      const claveHash = await argon2.hash(clave);
      const id = AlumnoModel.createAlumno(nombre, email, claveHash, id_curso, id_grupo);

      if (id){
        const admin = email == process.env.EMAIL_ADMIN ? true : false;

        //generamos el token
        const token = jwt.sign(
          {
            id: id,
            email: email,
            admin: admin
          }
          , process.env.CLAVE_TOKEN);

        res.cookie("token", token,
          {
            maxAge: 36000000, //10 horas
            path: "/",
            httpOnly: true,
            secure: false, //FIXME: cambiarlo en producción
            sameSite: "strict"
          })
        .send({ nombre, email, id, id_curso, id_grupo, admin });
        return;
      }
      else
        res.status(500).send("No se pudo crear el usuario");
    } catch (err) {
      res.status(500).send("No se pudo crear el usuario");
    }
  }



  static removeAlumno(req, res) {
    //TODO: eliminar alumno
    res.send({});
  }

  static modifyAlumno(req, res) {
    //TODO: modificar alumno
    res.send({});
  }


  static async loginAlumno(req, res) {
    //FIXME: validación
    const {email, clave} = req.body;

    try {
      const alumno = AlumnoModel.getAlumnoByEmail(email);

      if (await argon2.verify(alumno.clave, clave)) {

        const admin = alumno.email == process.env.EMAIL_ADMIN ? true : false;
        //generamos el token
        const token = jwt.sign(
          {
            id: alumno.id,
            email: alumno.email,
            admin: admin
          }
          , process.env.CLAVE_TOKEN);

        res.cookie("token", token,
          {
            maxAge: 36000000, //10 horas
            path: "/",
            httpOnly: true,
            secure: false, //FIXME: cambiarlo en producción
            sameSite: "strict"
          })
          .send({nombre:alumno.nombre, email: alumno.email, id:alumno.id, id_curso: alumno.id_curso, id_grupo: alumno.id_grupo, admin: admin});
          return;
      } else {
        res.status(401).send("No se pudo realizar el login. Clave incorrecta.");
      }
    } catch (err) {
      res.status(401).send("No se pudo realizar el login.");
    }
  }



  static logoutAlumno(req, res) {
    res.clearCookie('token').send("Sesión cerrada.");
  }

  // TODO: cambiarlo para que se refresque la cookie y el token
  static checkLoginAlumno(req, res) {
    //Al ser una ruta verificada, si no hay token o no es correcto el middleware auth se encarga 
    res.cookie("token", token,
      {
        maxAge: 36000000, //10 horas
        path: "/",
        httpOnly: true,
        secure: false, //FIXME: cambiarlo en producción
        sameSite: "strict"
      })
      .send("Se ha refrescado la cookie de autenticación");
  }

}

export default AlumnoController;
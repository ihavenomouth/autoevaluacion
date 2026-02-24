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
    const email = req.email;
    const clave = req.clave;

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
          .send(alumno);
      } else {
        res.status(401).send("No se pudo realizar el login.");
      }
    } catch (err) {
      res.status(401).send("No se pudo realizar el login.");
    }
    res.send({});
  }



  static logoutAlumno(req, res) {
    res.clearCookie('token').send("Sesión cerrada.");
  }

}

export default AlumnoController;
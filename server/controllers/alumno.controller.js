import AlumnoModel from "../models/alumno.model.js";
import argon2 from "argon2";


class AlumnoController {

  static getAlumnos(req,res){
    const alumnos = AlumnoModel.getAlumnos();
    console.log(alumnos);
    res.send(alumnos);
  }


  static getAlumnoByEmail(req,res){
    const email = req.params.email;
    const alumno = AlumnoModel.getAlumnoByEmail(email);
    if(alumno)
      res.send(alumno);
    else
      res.status(404).send("No existe el alumno con email " + email);
  }



  static async createAlumno(req,res){
    const {nombre,email,clave,id_curso,id_grupo} = req.body;
    try {
      const claveHash = await argon2.hash(clave);
      const id = AlumnoModel.createAlumno(nombre,email,claveHash,id_curso,id_grupo);
      
      if(id)
        res.send({nombre,email,id,id_curso,id_grupo});
      else
        res.status(500).send("No se pudo crear el usuario");
    } catch (err) {
      res.status(500).send("No se pudo crear el usuario");
    }
  }

  static removeAlumno(req,res){
    res.send({});
  }

  static modifyAlumno(req,res){
    res.send({});
  }

}

export default AlumnoController;
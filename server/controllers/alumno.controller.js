import AlumnoModel from "../models/alumno.model.js";



class AlumnoController {

  static getAlumnos(req,res){
    const alumnos = AlumnoModel.getAlumnos();
    console.log(alumnos);
    res.send(alumnos);
  }

  static getAlumnoByEmail(req,res){
    const email = req.params.email;
    res.send({email});
  }

  static createAlumno(req,res){
    const {nombre,email,clave,id_curso,id_grupo} = req.body;
    const alumno = AlumnoModel.createAlumno(nombre,email,clave,id_curso,id_grupo);
    res.send(alumno);
  }

  static removeAlumno(req,res){
    res.send({});
  }

  static modifyAlumno(req,res){
    res.send({});
  }

}

export default AlumnoController;
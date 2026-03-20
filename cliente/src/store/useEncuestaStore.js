import { create } from 'zustand'

const useEncuestaStore = create(
    (set,get) => ({
      encuestas: [],
      encuestasCursoGrupo: [],
      preguntas: [],
      error: false,

      //Las notas con las que el usuario ha contestado a las preguntas de una encuesta
      //[ ...{id_pregunta, id_alumno, id_alumno_evaluado, nota} ]
      respuestas: [],


      fetchEncuestas: async () => {
        set({ error: false });
        
        try {
          const response = await fetch("/api/encuesta");
          
          if (!response.ok)
            throw new Error("No se pudieron recuperar las encuestas");
          
          const datos = await response.json();
          set({ encuestas: datos, error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      fetchEncuestasByCursoYGrupo: async (id_curso,id_grupo) => {
        set({ error: false });

        try {
          const response = await fetch("/api/encuesta/curso/"+id_curso+"/grupo/"+id_grupo );
          
          if (!response.ok)
            throw new Error("No se pudieron recuperar las encuestas");
          
          const datos = await response.json();
          set({ encuestasCursoGrupo: datos, error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      createEncuesta: async (nombre, id_curso, id_grupo) => {
        set({ error: false });
        
        try {
          const response = await fetch("/api/encuesta",{
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({nombre, id_curso, id_grupo})
          });
          
          if (!response.ok)
            throw new Error("No se pudo crear la encuesta "+ nombre);
          
          const datos = await response.json();
          set({ encuestas: [...get().encuestas, datos], error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      modifyEncuesta: async (id, nombre, id_curso, id_grupo) => {

        set({ error: false });
        
        try {
          const response = await fetch("/api/encuesta",{
            method: "put",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({id, nombre, id_curso, id_grupo})
          });
          
          if (!response.ok)
            throw new Error("No se pudo modificar la encuesta "+ nombre);
          
          const datos = await response.json();
          const posición = get().encuestas.findIndex(enc=>enc.id == id)
          set({ encuestas: get().encuestas.with( posición, datos), error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      createPregunta: async (id_encuesta, nombre, texto, peso) => {
        set({ error: false });
        
        try {
          const response = await fetch("/api/pregunta",{
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({id_encuesta, nombre, texto, peso})
          });
          
          if (!response.ok)
            throw new Error("No se pudo crear la pregunta "+ nombre);
          
          const datos = await response.json();
          set({ preguntas: [...get().preguntas, datos], error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },

      fetchPreguntasById_encuesta: async (id_encuesta) => {
        set({ error: false });
        
        try {
          const response = await fetch("/api/pregunta/encuesta/"+id_encuesta);
          
          if (!response.ok)
            throw new Error("No se pudieron recuperar las preguntas");
          
          const datos = await response.json();
          set({ preguntas: datos, error: false});
          return datos;
          
        }
        catch (error) {
          set({ error: true });
          console.error(error);
          return null;
        }
      },


      modifyPregunta: async (id, nombre, texto, peso,id_encuesta) => {

        set({ error: false });
        
        try {
          const response = await fetch("/api/pregunta",{
            method: "put",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({id, nombre, texto, peso, id_encuesta})
          });
          
          if (!response.ok)
            throw new Error("No se pudo modificar la pregunta "+ nombre);
          
          const datos = await response.json();
          const posición = get().preguntas.findIndex(preg=>preg.id == id)
          set({ preguntas: get().preguntas.with( posición, datos), error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      removePregunta: async (id) => {

        set({ error: false });
        
        try {
          const response = await fetch("/api/pregunta/"+id,{
            method: "delete",
            headers: {
              "content-type": "application/json"
            },
          });
          
          if (!response.ok)
            throw new Error("No se pudo eliminar la pregunta con id "+ id);
          
          await response.json(); // sólo nos devuelve un objeto con el id de la pregunta eliminada: {id:7}
          set({ preguntas: get().preguntas.filter(p=>p.id != id), error: false});
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },




      inicializarRespuestas: (preguntas, id_alumno, id_alumno_evaluado)=>{
        // Si no vienen preguntas por parámetro, usamos las del store
        const listaPreguntas = preguntas || get().preguntas;
        
        const respuestasIniciales = listaPreguntas.map( p=> ({id_alumno, id_alumno_evaluado, id_pregunta: p.id, nota:0}));
        
        set({respuestas: respuestasIniciales });
      },


      setNotaRespuesta: (id_pregunta, nota) => {
        const respuestasActuales = get().respuestas;

        const posRespuesta = respuestasActuales.findIndex( respuesta => respuesta.id_pregunta == id_pregunta);
        if(posRespuesta != -1){
          const nuevaRespuesta = { ...respuestasActuales[posRespuesta], nota: nota };
          set({respuestas: respuestasActuales.with( posRespuesta, nuevaRespuesta)})
        }
      },


      createRespuestas: async () => {
        set({ error: false });
        
        try {
          const respuestas = get().respuestas;
          const response = await fetch("/api/respuesta",{
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(respuestas)
          });
          
          if (!response.ok)
            throw new Error("No se pudieron crear las respuestas "+ respuestas);
          
          await response.json();
          // Aunque se devuelvan datos, no se usan para nada
          set({ error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


    }
  )
)



export default useEncuestaStore;

// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),

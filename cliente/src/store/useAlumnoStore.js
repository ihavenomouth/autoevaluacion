import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAlumnoStore = create(
  persist(
    (set) => ({
      nombre: null,
      email: null,
      admin: false,
      id: null,
      id_curso: null,
      id_grupo: null,
      error: false,


      createAlumno: async (nombre, email, clave, id_curso, id_grupo) => {
        set({ error: false });
        console.log(nombre, email, clave, id_curso, id_grupo)
        try {
          const response = await fetch("/api/alumno", {
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              email, nombre, clave, id_curso, id_grupo
            })
          });

          if (!response.ok)
            throw new Error("No se pudo crear el alumno");

          const datos = await response.json();
          set({ nombre: datos.nombre, email: datos.email, admin: datos.admin, id: datos.id, id_curso: datos.id_curso, id_grupo: datos.id_grupo });

          set({ error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },




      loginAlumno: async (email, clave) => {
        set({ error: false });

        try {
          const response = await fetch("/api/alumno/login", {
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              email, clave
            })
          });

          if (!response.ok)
            throw new Error("No se pudo realizar el login del alumno");

          const datos = await response.json();
          set({ nombre: datos.nombre, email: datos.email, admin: datos.admin, id: datos.id, id_curso: datos.id_curso, id_grupo: datos.id_grupo });

          set({ error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      //TODO: TERMINARLO PARA QUE HAGA LA LLAMADA AL SERVIDOR
      logoutAlumno: async ()=>{
        set({ error: false });

        try {
          const response = await fetch("/api/alumno/logout", {
            method: "post"
          });

          if (!response.ok)
            throw new Error("No se pudo realizar el cierre de sesión del alumno");

          const datos = await response.text();
          console.log(datos); //TODO: eliminar este console.log
          set({
            nombre: null,
            email: null,
            admin: false,
            id: null,
            id_curso: null,
            id_grupo: null,
            error: false,
          })

          set({ error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      }


    }
  ),


    {
      name: 'alumno-storage', // name of the item in the storage (must be unique)
    }
  
  )
)



export default useAlumnoStore;

// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),

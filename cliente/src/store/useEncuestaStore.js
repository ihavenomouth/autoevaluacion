import { create } from 'zustand'

const useEncuestaStore = create(
    (set,get) => ({
      encuestas: [],
      error: false,


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

    }
  )
)



export default useEncuestaStore;

// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),

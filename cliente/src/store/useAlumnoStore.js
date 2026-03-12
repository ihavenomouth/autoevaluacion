import { create } from 'zustand'

const useAlumnoStore = create(
    (set) => ({
      alumnos: [],
      error: false,


      fetchAlumnos: async () => {
        set({ error: false });
        try {
          const response = await fetch("/api/alumno");

          if (!response.ok)
            throw new Error("No se pudieron recuperar los alumnos");

          const datos = await response.json();
          set({ alumnos: datos, error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },





    }
  ),

)



export default useAlumnoStore;

// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),

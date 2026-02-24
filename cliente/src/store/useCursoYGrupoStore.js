import { create } from 'zustand'

const useCursoYGrupoStore = create(
    (set) => ({
      cursos: [],
      grupos: [],
      error: false,


      fetchCursos: async () => {
        set({ error: false });
        
        try {
          const response = await fetch("/api/curso");
          
          if (!response.ok)
            throw new Error("No se pudieron recuperar los cursos");
          
          const datos = await response.json();
          set({ cursos: datos});
          set({ error: false });
        }
        catch (error) {
          set({ error: true });
          console.error(error);
        }
      },


      fetchGrupos: async () => {
        set({ error: false });

        try {
          const response = await fetch("/api/grupo");

          if (!response.ok)
            throw new Error("No se pudieron recuperar los grupos");

          const datos = await response.json();
          set({ grupos: datos});
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



export default useCursoYGrupoStore;

// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),

import { useEffect } from "react";
import H1 from "../components/H1";
import {useLocation, Link} from 'wouter';
import useAlumnoStore from "../store/useAlumnoStore";
import TabItem from "../components/TabItem";

function MainAdminPage(){

  const [location, setLocation] = useLocation();
  const admin = useAlumnoStore(state => state.admin);

  useEffect(()=>{
    if(!admin)
      setLocation("/")
  }
  ,[])

  return(<>
    <H1>Página de administración</H1>


    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li><Link href="/MainAdminPageCursos">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-multiple-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" /><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" /><path d="M14 14v-8l-2 2" /></svg>
        Cursos
        </Link>
      </li>
      <li><Link href="/MainAdminPageGrupos">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
        Grupos
        </Link>
      </li>
      <li><Link href="/MainAdminPageEncuestas">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
        Encuestas
        </Link>
      </li>
      <li><Link href="/MainAdminPagePreguntas">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" /><path d="M12 19l0 .01" /></svg>
        Preguntas
        </Link>
      </li>
      <li><Link href="/MainAdminPageResultados">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-presentation-analytics"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12v-4" /><path d="M15 12v-2" /><path d="M12 12v-1" /><path d="M3 4h18" /><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><path d="M12 16v4" /><path d="M9 20h6" /></svg>
        Resultados
        </Link>
      </li>
    </ul>


  </>)
}

export default MainAdminPage;
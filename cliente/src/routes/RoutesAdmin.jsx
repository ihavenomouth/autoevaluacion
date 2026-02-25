import {Route, Switch,Redirect } from "wouter";

import CursosPage from "../pages/Admin/CursosPage.jsx";
import GruposPage from "../pages/Admin/GruposPage.jsx";
import AlumnosPage from "../pages/Admin/AlumnosPage.jsx";
import EncuestasPage from "../pages/Admin/EncuestasPage.jsx";
import PreguntasPage from "../pages/Admin/PreguntasPage.jsx";
import ResultadosPage from "../pages/Admin/ResultadosPage.jsx";


function RoutesAdmin(){
  return(<>
    {/* <Router base="/admin"> */}
    <Switch>
      <Route path="/admin/cursos" component={CursosPage} />
      <Route path="/admin/grupos" component={GruposPage} />
      <Route path="/admin/alumnos" component={AlumnosPage} />
      <Route path="/admin/encuestas" component={EncuestasPage} />
      <Route path="/admin/preguntas" component={PreguntasPage} />
      <Route path="/admin/resultados" component={ResultadosPage} />
      
      <Route path="/admin"><Redirect to="/admin/encuestas" /></Route>
      {/* <Route><Redirect to="/admin/cursos"/></Route> */}
    </Switch>
  </>)
}

export default RoutesAdmin;
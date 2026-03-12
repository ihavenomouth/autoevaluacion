import {Route, Switch,Redirect } from "wouter";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";
// import PreguntasPage from "../pages/Admin/PreguntasPage.jsx";


function Routes(){
  return(<>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registro" component={RegistroPage} />
      <Route path="/main" component={MainPage} />

    
      {/* <Route path="/admin/preguntas/encuesta/:id">
        {(params) => <PreguntasPage id_encuesta={params.id}/>}
      </Route>   */}
      <Route path="/admin/:*" component={AdminPage} />
      <Route path="/admin/preguntas/encuesta/:*" component={AdminPage} />
      <Route path="/admin" component={AdminPage} /> 
      
      <Route><Redirect to="/"/></Route>
    </Switch>
  </>)
}

export default Routes;
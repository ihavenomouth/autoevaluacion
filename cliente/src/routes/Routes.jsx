import {Route, Switch,Redirect } from "wouter";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";


function Routes(){
  return(<>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registro" component={RegistroPage} />
      <Route path="/main" component={MainPage} />
      {/* <Route path="/mainAdmin" component={MainAdminPage} /> */}
      <Route path="/admin/:*" component={AdminPage} />
      <Route path="/admin" component={AdminPage} /> 
      
      {/* Usamos un wildcard para que este componente capture todas las subrutas */}
      {/* <Route path="/admin/:*">
        <MainAdminPage />
      </Route> */}
      
      <Route><Redirect to="/"/></Route>
    </Switch>
  </>)
}

export default Routes;
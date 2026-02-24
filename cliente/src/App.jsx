import Routes from "./routes/Routes"
import NavBar from "./components/NavBar"

import useAlumnoStore from "./store/useAlumnoStore";
import { useEffect } from "react";

function App() {

  const checkLogin = useAlumnoStore(state => state.checkLogin);

  useEffect(()=>{
    checkLogin
  }
  ,[]);

  return (
    <>
    <div className="min-h-screen">
    <NavBar/>
    <main className="mx-auto p-4 max-w-4xl bg-base-200">
      <Routes/>
    </main>    
    </div>
    </>
  )
}

export default App

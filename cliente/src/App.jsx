import Routes from "./routes/Routes"
import NavBar from "./components/NavBar"

import useUsuarioStore from "./store/useUsuarioStore";
import { useEffect } from "react";

function App() {

  const checkLogin = useUsuarioStore(state => state.checkLogin);

  useEffect(()=>{
    checkLogin()
  }
  ,[checkLogin]);

  return (
    <>
    <div className="min-h-screen">
    <NavBar/>
    <main className="mx-auto p-4 max-w-4xl bg-base-200 pt-12">
      <Routes/>
    </main>    
    </div>
    </>
  )
}

export default App

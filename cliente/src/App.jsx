import Routes from "./routes/Routes"
import NavBar from "./components/NavBar"

function App() {

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

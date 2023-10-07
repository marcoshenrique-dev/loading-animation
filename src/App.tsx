import { Plane, Ticket } from "lucide-react"

function App() {

  return (
    <>
    <div id='loading'>
      <Ticket className="animate-bounce text-blue-600" size={40}/>
		</div>

    <div className="flex flex-1 flex-col justify-center items-center w-full h-screen">
      <Plane className="animate-pulse text-blue-600 mb-5" size={30}/>
      <h1 className="text-xl font-bold text-white">Welcome to tickets app!</h1>  
    </div>
    </>
  )
}

export default App

import { Plane, Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import { startAnimation, stopAnimation } from "./utils/loader";

function Manual() {

  const [isActive, setIsActive] = useState(false);

  function startWithTimeout() {
    startAnimation();
    const timeoutId = setTimeout(stopAnimation, 3000);
    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    startWithTimeout();
  }, []);

  useEffect(() => {
    if(isActive) {
      startWithTimeout();
      setIsActive(false);
    }
  }, [isActive]);

  return (
    <>
    <div id='loading'>
      <Ticket className="animate-bounce text-blue-600" size={40}/>
		</div>

    <div className="flex flex-1 flex-col justify-center items-center w-full h-screen">
      <Plane className="animate-pulse text-blue-600 mb-5" size={35}/>
      <h1 className="text-xl font-bold text-white">Welcome to tickets Manual!</h1>
      <button className="p-2 px-4 bg-blue-60 font-bold bg-blue-600 text-white mt-5 rounded-sm" onClick={() => setIsActive(true)}>
        Start animation
      </button>
    </div>
    </>
  )
}

export default Manual

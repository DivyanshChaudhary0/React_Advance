import { useState } from "react"

function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-3xl">Time Counter</h1>
        <div className="w-96 h-96 text-center border border-gray-700 rounded-xl">
          <div className="flex justify-center items-center gap-6 pt-10 pb-6">
            <input type="text" placeholder="HH" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" placeholder="MM" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" placeholder="SS" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
          </div>
          <button onClick={handleStart} className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Start</button>
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useRef, useState } from "react"

function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const tid = useRef(null);

  const handleStart = () => {
    if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
      alert("Enter valid time")
      return;
    }
    if(hours >= 0 && hours <= 12 || minutes >= 0 && minutes <= 59 || seconds >= 0 && seconds <=59){
      alert("Enter valid time")
      return;
    }
    setIsStarted(true);
  }

  const runTimer = (hours,minutes,seconds) => {
    if(seconds > 0){
      setSeconds(s => s-1);
    }else if(minutes > 0 && seconds === 0){
      setMinutes(m => m-1);
      setSeconds(59);
    }else{
      setHours(h => h-1);
      setMinutes(59);
      setSeconds(59);
    }

    if(hours === 0 && minutes === 0 && seconds === 0){
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      alert("Timer is completed")
      clearInterval(tid.current);
      return;
    }

    console.log(hours,minutes,seconds);
  }

  const resetTimer = () => {
    setIsStarted(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(tid.current);
  }

  useEffect(() => {
    if(!isStarted) return;

    tid.current = setInterval(()=>{
      runTimer(hours,minutes,seconds);
    },1000)

    return () => {
      clearInterval(tid.current);
    }

  },[isStarted,hours,minutes,seconds])


  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-3xl">Time Counter</h1>
        {!isStarted && (<div className="w-96 h-96 text-center border border-gray-700 rounded-xl">
          <div className="flex justify-center items-center gap-6 pt-10 pb-6">
            <input type="text" onChange={(e) => setHours(parseInt(e.target.value))} placeholder="HH" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" onChange={(e) => setMinutes(parseInt(e.target.value))} placeholder="MM" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" onChange={(e) => setSeconds(parseInt(e.target.value))} placeholder="SS" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
          </div>
          <button onClick={handleStart} className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Start</button>
        </div>)}

        {isStarted && (<div className="w-96 h-96 text-center border border-gray-700 rounded-xl">
          <div className="flex justify-center items-center gap-2 pt-10 pb-6 text-4xl">
            <div> {hours<10 ? `0${hours}` : hours}: </div>
            <div> {minutes<10 ? `0${minutes}` : minutes}: </div>
            <div> {seconds<10 ? `0${seconds}` : seconds} </div>
          </div>
          <button className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Pause</button>
          <button onClick={resetTimer} className="px-6 py-1 border border-black rounded cursor-pointer bg-red-500 text-white mx-4">Reset</button>
        </div>)}

      </div>
    </>
  )
}

export default App

import { useEffect, useRef, useState } from "react"
import InputTimer from "./Components/InputTimer";
import StartTimer from "./Components/StartTimer";

function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const tid = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
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

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(tid.current);
  }

  const handleResume = () => {
    setIsPaused(false);
    runTimer(hours,minutes,seconds);
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

        <InputTimer isStarted={isStarted} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} handleStart={handleStart} />

        <StartTimer isStarted={isStarted} hours={hours} minutes={minutes} seconds={seconds} handlePause={handlePause} 
          handleResume={handleResume} isPaused={isPaused} resetTimer={resetTimer} 
        />

      </div>
    </>
  )
}

export default App

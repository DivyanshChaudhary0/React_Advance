import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const timer = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function handleStart(){
    setIsStarted(true);
  }

  function runTimer(hour,minute,second){
    if(second < 59) setSecond(s => s+1);
    else if(minute < 59 && second === 59){
      setMinute(m => m+1);
      setSecond(0);
    }
    else{
      setHour(h => h+1);
      setMinute(0);
      setSecond(0);
    }
  }

  function handlePause(){
    setIsPaused(true);
    clearInterval(timer.current);
  }

  function handleResume(){
    setIsPaused(false);
    runTimer(hour,minute,second);
  }

  function handleReset(){
    setIsStarted(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(timer.current);
    return;
  }


  useEffect(() => {
    if(!isStarted) return;
    timer.current = setInterval(function(){
      runTimer(hour,minute,second)
    },1000)

    return () => {
      clearTimeout(timer.current);
    }
  },[isStarted,hour,minute,second])

  return (
    <div className='container'>
      <div className='timer'>
        <p>Hours: <span className='time'>{hour < 10 ? `0${hour}`: hour}</span></p>
        <p>Minutes: <span className='time'>{minute < 10 ? `0${minute}`: minute}</span></p>
        <p>Seconds: <span className='time'>{second < 10 ? `0${second}`: second}</span></p>
      </div>

      <div>
        {!isStarted && <button onClick={handleStart}>Start</button>}
        {isStarted && (!isPaused ? <button onClick={handlePause}>Pause</button> : <button onClick={handleResume}>Resume</button>)}
        {isStarted && <button onClick={handleReset}>Reset</button>}
      </div>

    </div>
  )
}

export default App

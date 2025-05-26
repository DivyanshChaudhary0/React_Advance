import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const timer = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function runTimer() {
    setSecond(prev => {
      if (prev < 59) return prev + 1;
      setMinute(min => {
        if (min < 59) return min + 1;
        setHour(hr => hr + 1);
        return 0;
      });
      return 0;
    });
  }

  function handleStart() {
    setIsStarted(true);
    setIsPaused(false);
  }

  function handlePause() {
    setIsPaused(true);
    clearInterval(timer.current);
  }

  function handleResume() {
    setIsPaused(false);
  }

  function handleReset() {
    setIsStarted(false);
    setIsPaused(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(timer.current);
  }

  useEffect(() => {
    if (isStarted && !isPaused) {
      timer.current = setInterval(runTimer, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isStarted, isPaused]);

  return (
    <div className='container'>
      <div className='timer'>
        <p>Hours: <span className='time'>{hour.toString().padStart(2, '0')}</span></p>
        <p>Minutes: <span className='time'>{minute.toString().padStart(2, '0')}</span></p>
        <p>Seconds: <span className='time'>{second.toString().padStart(2, '0')}</span></p>
      </div>

      <div>
        {!isStarted && <button onClick={handleStart}>Start</button>}
        {isStarted && !isPaused && <button onClick={handlePause}>Pause</button>}
        {isStarted && isPaused && <button onClick={handleResume}>Resume</button>}
        {isStarted && <button onClick={handleReset}>Reset</button>}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const timer = useRef(null);

  useEffect(() => {

  },[])

  return (
    <div className='container'>
      <div className='timer'>
        <p>Hours: <span className='time'>00</span></p>
        <p>Minutes: <span className='time'>00</span></p>
        <p>Seconds: <span className='time'>00</span></p>
      </div>

      <div>
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>

    </div>
  )
}

export default App

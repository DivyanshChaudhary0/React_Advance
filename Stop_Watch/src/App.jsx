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

    </div>
  )
}

export default App



const StartTimer = ({isStarted,hours,minutes,seconds,handleResume,handlePause,isPaused,resetTimer}) => {
  return (
    <>
        {isStarted && (<div className="w-96 h-96 text-center border border-gray-700 rounded-xl">
          <div className="flex justify-center items-center gap-2 pt-10 pb-6 text-4xl">
            <div> {hours<10 ? `0${hours}` : hours}: </div>
            <div> {minutes<10 ? `0${minutes}` : minutes}: </div>
            <div> {seconds<10 ? `0${seconds}` : seconds} </div>
          </div>
          {isPaused ? (<button onClick={handleResume} className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Resume</button>) : (<button onClick={handlePause} className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Pause</button>)}
          <button onClick={resetTimer} className="px-6 py-1 border border-black rounded cursor-pointer bg-red-500 text-white mx-4">Reset</button>
        </div>)}
    </>
  )
}

export default StartTimer
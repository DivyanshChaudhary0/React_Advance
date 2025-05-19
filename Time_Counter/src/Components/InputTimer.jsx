
const InputTimer = ({isStarted,setHours,setMinutes,setSeconds,handleStart}) => {
  return (
    <>
        {!isStarted && (<div className="w-96 h-44 text-center border border-gray-700 rounded-xl">
          <div className="flex justify-center items-center gap-6 pt-10 pb-6">
            <input type="text" onChange={(e) => setHours(parseInt(e.target.value))} placeholder="HH" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" onChange={(e) => setMinutes(parseInt(e.target.value))} placeholder="MM" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
            <input type="text" onChange={(e) => setSeconds(parseInt(e.target.value))} placeholder="SS" maxLength={2} className="w-14 h-10 text-center border border-black rounded outline-blue-600" />
          </div>
          <button onClick={handleStart} className="px-6 py-1 border border-black rounded cursor-pointer bg-orange-500 text-white">Start</button>
        </div>)}
    </>
  )
}

export default InputTimer
import { useState } from "react"

const Input = () => {
    const [input, setInput] = useState("");

  return (
    <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  )
}

export default Input
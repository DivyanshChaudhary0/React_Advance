
import { useState } from "react"

const Accordian = ({data}) => {

    const [accIndex, setAccIndex] = useState(null);

    function handleClick(idx){
        setAccIndex(idx)
    }

  return (
    <div className="accordian">
        {
            data.map((val,index) => {
                return (
                    <div key={index} className="accordian-container">
                        <button onClick={() => handleClick(index)} className="acc-btn">{val.title}</button>
                        {accIndex === index && <p className="content">{val.content}</p>}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Accordian

import React, { useState } from 'react'

const Shimmer = () => {

    const [count,setCount] = useState(new Array(20).fill(1));

  return (

    <>

        {
            count.map((val,idx) => (
                <div key={idx} className="card w-[300px] h-[300px] bg-white rounded-xl overflow-hidden">

                </div>
            ))
        }
    </>
   
  )
}

export default Shimmer
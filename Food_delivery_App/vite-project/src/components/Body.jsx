
import React, { useEffect, useState } from 'react'
import RestrauntCard from './RestrauntCard'
import axios from "axios"
import Shimmer from './Shimmer';

const Body = () => {

    const [allData,setAllData] = useState([]);
    const [reslist, setResList] = useState([]);
    const [input,setInput] = useState("");
    

    useEffect(function(){
        axios.get("https://www.zomato.com/webroutes/getPage?page_url=/bhopal/great-cafes&location=&isMobile=0")
        .then((res)=> {
            setResList(res?.data?.page_data?.sections?.SECTION_ENTITIES_DATA)
            setAllData(res?.data?.page_data?.sections?.SECTION_ENTITIES_DATA)
        })
        .catch((err)=> {
            console.log(err);
        })
    },[])

    function handleFilter(){
        const filteredData = allData.filter((data)=> data.name.toLowerCase().includes(input.toLocaleLowerCase()));
        setResList(filteredData)
    }

    if(reslist.length === 0){
        return <Shimmer/>
    }

  return (
    <div className='py-10'>
        <div className='Search w-[90%] px-8 mx-auto flex items-center gap-6 mb-8'>
            <input value={input} onChange={(e)=> setInput(e.target.value)} className='w-[300px] px-3 py-2 rounded border border-black' type="text" placeholder='Enter name' />
            <button onClick={handleFilter} className='px-4 py-2 bg-yellow-500 rounded cursor-pointer'>Search</button>
        </div>
        <div className='Restaurant-cards'>
            <div className='w-[90%] mx-auto flex justify-center gap-8 flex-wrap'>
                {
                    reslist.map((data)=> (
                        <RestrauntCard key={data.id} data={data} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Body

import React from 'react'
import { FaStar } from "react-icons/fa";

const RestrauntCard = ({data}) => {

    const {imageUrl,name,subtitleData,rating_new} = data;

  return (
    <div className='w-[300px] h-[360px] bg-gray-100 rounded cursor-pointer overflow-hidden hover:shadow-xl' >
        <img className='w-full h-2/3 object-cover bg-red-100' src={imageUrl} alt="" />
        <div className='px-4 mt-2 flex flex-col gap-2'>
            <h2 className='text-xl line-clamp-1'>{name}</h2>
           
            <p className='px-3 rounded-xl bg-green-700 w-fit font-semibold text-white flex items-center gap-1'>
                {rating_new?.ratings?.DINING?.rating && rating_new?.ratings?.DINING?.rating} 
                {rating_new?.ratings?.DINING?.rating && <span>{<FaStar/>}</span>}
            </p>
            <p>{subtitleData?.locality?.text}</p>
        </div>
    </div>
  )
}

export default RestrauntCard
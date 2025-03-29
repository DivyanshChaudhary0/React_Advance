
import React from 'react'
import {useRouteError} from "react-router-dom"

const Error = () => {

    const err = useRouteError();

  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
        <p className='text-xl'>Status : {err.status} : {err.statusText} </p>
        <p className='text-2xl'>OOPS...!! Something went wrong...</p>
    </div>
  )
}

export default Error

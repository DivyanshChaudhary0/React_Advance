
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto bg-gray-300 p-4 flex items-center justify-between'>
        <div>Logo</div>
        <div className='flex items-center gap-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/comments"}>Comments</Link>
        </div>
    </div>
  )
}

export default Navbar
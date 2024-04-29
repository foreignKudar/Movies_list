import React from 'react'
import { AiFillHeart } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='h-36 flex justify-between items-center mx-7 text-white'>
      <div>Movie World</div>
      <button>
        <AiFillHeart className='text-red-500 w-7 h-7' />
      </button>
      
    </div>
  )
}

export default Navbar
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='h-36 flex justify-between items-center mx-7 text-white'>
      <Link to='/'>
        <div>Movie World</div>
      </Link>
      
      <Link to='/favorites'>
        <button >
          <AiFillHeart className='text-red-500 w-7 h-7' />
        </button>
      </Link>
      
      
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-evenly p-3 w-full shadow-sm shadow-gray-900/90 border-0 bg-gray-950'>
      <h2 className='text-md font-semibold'>Search Images</h2>
      <div className='flex flex-row gap-5 text-sm'>
        <Link to="/">Search</Link>
        <Link to="/collection">Collections</Link>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
// import "src/utils/Netflix_Logo_PMS.png"
import netflixlogo from "../utils/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b  from-black z-10">
      <img 
      className="w-44"
      // className='xyz'
      src= {netflixlogo}
      alt="Logo"
       />
       
    </div>
  )
}

export default Header
 
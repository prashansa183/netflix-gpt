import React from 'react'
import Header from './Header'
import backgroundimg from "../utils/header-image.png"
const Login = () => {
  return (
    <>
      <div >
        <Header/>

        <div className='absolute'>
          <img  
            src={backgroundimg}
            alt='logo' />
        </div>

        <form  className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 '>
          <h1 className='font-bold text-3xl py-4'>Sign In</h1>
         <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-700' />

          <input type="text" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700' />

          <button className='p-4 my-6 bg-red-700 rounded-lg w-full'>Sign In</button>

          <h1 className=' mx-9 '>New to Netflix? Sign Up Now!</h1>
        </form>
      </div>
    </>
  )
}

export default Login
 
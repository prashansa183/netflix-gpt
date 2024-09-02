import React from 'react'
import Header from './Header'
import { useState } from 'react'
import backgroundimg from "../utils/header-image.png"
const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <>
      <div >
        <Header />

        <div className='absolute'>
          <img
            src={backgroundimg}
            alt='logo' />
        </div>

        <form className='w-3/12  absolute  p-12  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 '>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>


{     !isSignInForm &&    ( <input type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700' />)}

          <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-700' />

          <input type="text" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700' />

          <button className='p-4 my-6 bg-red-700 rounded-lg w-full '>{isSignInForm ? "Sign In" : "Login"}</button>

          <h1 className=' mx-9 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now!" : "Already registed ? Sign In . "}
          </h1>
        </form>
      </div>
    </>
  )
}

export default Login

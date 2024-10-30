import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import backgroundimg from "../utils/header-image.png";
import { checkValideData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValideData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    //sign - in and sign up
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />

        <div className="absolute ">
          <img src={backgroundimg} alt="logo" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12  absolute  p-12  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85  "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-700"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email ID"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />

          <input
            type="text"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>

          <button
            className="p-4 my-6 bg-red-700 rounded-lg w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Login"}
          </button>

          <h1 className=" mx-9 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now!"
              : "Already registed ? Sign In . "}
          </h1>
        </form>
      </div>
    </>
  );
};

export default Login;

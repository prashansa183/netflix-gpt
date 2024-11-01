import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import backgroundimg from "../utils/header-image.png";
import { checkValideData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValideData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //sign - in and sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/110851352?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayname, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          }))
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });

          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
              ref={name}
              className="p-4 my-4 w-full rounded-lg bg-gray-700"
            />
          )}

          <input
            type="email"
            ref={email}
            placeholder="Email ID"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>

          <button
            className="p-4 my-6 bg-red-700 rounded-lg w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "sign up"}
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

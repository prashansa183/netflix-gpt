import React from "react";
import netflixlogo from "../utils/Netflix_Logo_PMS.png";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addUser,removeUser } from "../utils/userSlice";



const Header = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // when user sign IN or sign UP this part will be executed
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      }
      // when user sign Out this part will execute
      else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-screen flex justify-between from-black z-10">
      <img
        className="w-44"
        src={netflixlogo}
        alt="Logo"
      />

      {user && (
        <div className="flex gap-4 p-2 items-center ">
          <div className="">
            <img
              className="w-8 h-10  rounded-full object-cover"
              alt="usericon"
              src={user?.photoURL}
            />
          </div>

          <div className=" pl-5 pr-5 rounded-md bg-red-700">
            <button
              onClick={handleSignOut}
              className="font-semibold
        h-10
        text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React from "react";
// import "src/utils/Netflix_Logo_PMS.png"
import netflixlogo from "../utils/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Userimg from "../utils/userimg.png";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-screen flex justify-between from-black z-10">
      <img
        className="w-44"
        // className='xyz'
        src={netflixlogo}
        alt="Logo"
      />

      {user && (
        <div className="flex gap-4 p-2 items-center " >

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

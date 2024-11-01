import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from"../utils/userSlice"
const Body = () => {
  const dispatch=useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
  
    onAuthStateChanged(auth, (user) => {
      // when user sign IN or sign UP this part will be executed 
      if (user) {
       
        const {uid,email,displayname} = user;
        dispatch(addUser({uid: uid,email:email,displayname:displayname}))
        
        
        
      }
      // when user sign Out this part will execute
      else {
        dispatch(removeUser())
        
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

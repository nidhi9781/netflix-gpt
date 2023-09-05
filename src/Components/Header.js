import React from 'react'
import {  signOut } from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=> store.user);
    const handleSignOut = () => {
       

        signOut(auth).then(() => {
            navigate("/");
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt = "logo"  className='w-44 '/>

<div className='flex py- 10 my-8'>
     <img src = {user.photoURL} alt = "photo" />   

    <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
    </div>
    </div>
  )
}

export default Header
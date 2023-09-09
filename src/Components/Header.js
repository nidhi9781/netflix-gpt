import React from 'react'
import { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { logourl } from '../Utils/constants';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userS = useSelector(store=> store.user);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({uid: uid,email: email, displayName: displayName, photoURL : photoURL}));
            navigate("/browse");
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
        }
        });
        return()=> unsubscribe();
        
},[])
    const handleSignOut = () => {
       

        signOut(auth).then(() => {
          //  navigate("/");
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src = {logourl}
        alt = "logo"  className='w-44 '/>

{userS && (
    <div className='flex py- 10 my-8'>
   
     <img src = {userS.photoURL} alt = "photo" className='w-12 h-12' />   

    <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
    </div>
    )}
    </div>
  )
}

export default Header
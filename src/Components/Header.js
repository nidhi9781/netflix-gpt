import React from 'react'
import { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { Supported_language, logourl } from '../Utils/constants';
import { toggleGPTView } from '../Utils/GPTSlice';
import { lang } from '../Utils/LanguageConstants';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userS = useSelector(store=> store.user);
    const showGPTSearch = useSelector(store => store.gpt.toggleGPTFlag)
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

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
}

    const handleGPTSClickToggle = () => {
        dispatch(toggleGPTView());
    }


    const handleSignOut = () => {
       

        signOut(auth).then(() => {
          //  navigate("/");
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <div className='fixed w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between '>
        <img className="w-44 mx-auto md:mx-0" src = {logourl}
        alt = "logo" />

{userS && (
    <div className='flex  p-2 justify-between'>

     {showGPTSearch && <select className='bg-gray-900 text-white p-2 m-4' onChange={handleLanguageChange} >
       { Supported_language.map(langS =>  <option key={langS.identifier} value={langS.identifier}>{langS.name}</option>)}
      </select>}

    <button onClick={handleGPTSClickToggle} className='bg-purple-800 rounded-lg py-2  px-4 m-4 text-white'>{ showGPTSearch ? "HomePage" : "GPTSearch"}</button>
   
     <img src = {userS.photoURL} alt = "photo" className='hidden md:block w-12 h-12' />   

    <button className='text-white font-bold m-2' onClick={handleSignOut}>Sign Out</button>
    </div>
    )}
    </div>
  )
}

export default Header
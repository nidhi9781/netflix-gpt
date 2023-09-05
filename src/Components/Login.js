import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header'
import {checkEmailAndPwdValidation}  from '../Utils/Validation';
import {auth} from "../Utils/firebase";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm,setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null);
  const email = useRef(null);
  const pwd = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }

    const handleSignUpSubmit = () => {
        console.log(email.current.value);
        console.log(pwd.current.value);
        
        const message = checkEmailAndPwdValidation(email.current.value,pwd.current.value);
        console.log(message);
        seterrorMessage(message);
       // if(message != null) return;

        if(!isSignInForm)
        {
            createUserWithEmailAndPassword(auth, email.current.value, pwd.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/77563311?s=400&v=4"
              }).then(() => {
                navigate("/browse");
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
                seterrorMessage(error.message);
              });

              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + "-np" + errorMessage);
              navigate("/");
              // ..
            });
        }
        else
        {
            //sign in logic

            signInWithEmailAndPassword(auth,  email.current.value, pwd.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-np" + errorMessage);
                navigate("/");
             });

        }

    }

  
  return (
    <div>
        <Header />
        <div className='absolute '> 
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='background' />
        </div>    
        <form onSubmit={(e) => e.preventDefault()}  className=' absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
                 <input type="text" ref={name} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />
            }
           <p className='text-red-500'>{errorMessage}</p>
            <input type="text" ref={email} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type="password" ref={pwd} placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <button onClick = {handleSignUpSubmit} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            
            <p className='py-4 cursor-pointer'  onClick = {toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
        </form>
    </div>
  )
}

export default Login 
import React from 'react'
import {auth, googleProvider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth';

function GoogleLogin() {

    const handleGoogleSignIn = async () =>{
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log(`Welcome , ${user.displayName}`);
            
            
        } catch (error) {
            console.log("Google Sign In Error!");
            
        }
    }
  return (
    <>
    
    <button className='btn btn-success' onClick={handleGoogleSignIn}>Sign In With Google</button>
    
    </>
  )
}

export default GoogleLogin
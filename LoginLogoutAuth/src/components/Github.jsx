import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, githubAuthProvider } from '../firebase/config'

function Github() {

    const handleGithubSignIn= async()=>{
        try{
            const result= await signInWithPopup(auth,githubAuthProvider);
            const user = result.user;
            console.log(`hello,${user.displayName} !welcome`);
            
        }catch(error){
            console.log(error);
            
        }
    }
  return (
    <>
<button className='btn btn-primary' onClick={handleGithubSignIn}>sign in with github</button>
    </>
  )
}

export default Github
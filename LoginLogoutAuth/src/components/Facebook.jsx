import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, facebookAuthProvider } from '../firebase/config'
import { FaFacebook } from 'react-icons/fa'


function Facebook() {
  const handleFacebookSignIn= async()=>{
    try{
      const result = await signInWithPopup(auth,facebookAuthProvider)
      const user = result.user
      console.log(`Welcome,${user.displayName}`);
      
    }catch(error){
      console.log("error");
      
    }
  }
  return (
    <>
     <button
         onClick={handleFacebookSignIn}
         className="btn d-flex justify-content-center align-items-center"
         style={{
           borderRadius: '50%',
           width: '45px',
           height: '45px',
           padding: 0,
           fontSize: '24px',
           lineHeight: 1,
           backgroundColor: 'white',
           border: '1px solid #ddd',
           boxShadow: '0 0 5px rgba(0,0,0,0.1)',
           cursor: 'pointer',
         }}
         aria-label="Sign in with Facebook"
         title="Sign in with Facebook"
       >
         <FaFacebook/>
       </button>
    </>
  )
}

export default Facebook
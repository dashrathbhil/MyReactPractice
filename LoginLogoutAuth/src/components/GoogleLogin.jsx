import React from 'react'
import { auth, googleProvider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'  // Google icon (colorful)

function GoogleLogin() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      console.log(`Welcome, ${user.displayName}`)
    } catch (error) {
      console.log("Google Sign In Error!")
    }
  }

  return (
    <button
      onClick={handleGoogleSignIn}
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
      aria-label="Sign in with Google"
      title="Sign in with Google"
    >
      <FcGoogle />
    </button>
  )
}

export default GoogleLogin

import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, githubAuthProvider } from '../firebase/config'
import { FaGithub } from 'react-icons/fa'

function Github() {
  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubAuthProvider)
      const user = result.user
      console.log(`hello, ${user.displayName}! Welcome.`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      onClick={handleGithubSignIn}
      className="btn btn-dark d-flex justify-content-center align-items-center"
      style={{
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        padding: 0,
        fontSize: '20px',
        lineHeight: 1,
      }}
      aria-label="Sign in with GitHub"
    >
      <FaGithub />
    </button>
  )
}

export default Github

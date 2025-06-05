import React from 'react'
import { useAuth } from "../context/AuthContext";


function Profile() {

    const {user} = useAuth()
  return (
    <div>{user ? `Logged In as : ${user.email}` : "Not Logged In"}</div>
  )
}

export default Profile
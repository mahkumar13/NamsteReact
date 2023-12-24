import React, { useContext } from 'react'
import UserContext from '../Utils/UserContext'

const ContactUs = () => {
  const {loggedInUser}= useContext(UserContext)
  return (
    <div>
      <h1>ContactUs</h1>
      <h2>{loggedInUser}</h2>
    </div>
  )
}

export default ContactUs

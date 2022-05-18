import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import LoginPrompt from '../components/LoginPrompt'

const Login = () => {
  return (
    <div className = {"bg-fuchsia-900"} >
      <h1 className = {"text-stone-50 font-serif text-5xl mb-5 mt-15"}>Premier League</h1>
      <p>   </p>
      {/* <Link to ="/Home"><Button label = "Log In">Log In</Button></Link> */}
      <LoginPrompt/>
      <p>TODO: Login Inputs </p>
      <p>TODO: Login database</p>
      <p>TODO: JWT Authentication</p>
    </div>
  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import LoginPrompt from '../components/LoginPrompt'

const Login = () => {
  return (
    <div className = {"bg-WhiteSmoke-900"}>
      <div className = {"bg-fuchsia-900"} >
        <h1 className = {"text-stone-50 font-serif text-5xl mb-5 mt-15"}>Premier League</h1>
        <p>   </p>
      </div>
          <LoginPrompt/>
    </div>
  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import LoginPrompt from '../components/LoginPrompt'

const Login = () => {
  return (
      <body   
      class="
        bg-gradient-to-r
        from-fuchsia-500
        via-violet-500
        to-indigo-500
        login-animate
        h-screen" >
      <img src = {require('../img/logo-main.png')} width = '400'/>
        {/*<h1 className = {"text-stone-50 font-serif text-5xl mb-5 mt-15"}>Premier League</h1>*/}
        <p>   </p>
        <LoginPrompt/>
      </body>
  )
}

export default Login

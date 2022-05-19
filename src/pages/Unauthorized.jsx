import React from 'react'
import { Link }from 'react-router-dom'

const Unauthorized = () => {
  return(
    <div className = {"bg-WhiteSmoke-900"}>
      <div className = {"bg-fuchsia-900"} >
        <h1 className = {"text-stone-50 font-serif text-5xl mb-5 mt-15"}>Premier League</h1>
        <p>   </p>
      </div>
      <div className = {"text-3xl font-medium"}>
        Unauthorized Request
      </div>
        <br/>
        <Link to = "/" class="
                                px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out">Return to Login</Link>
    </div>
  )
    
}

export default Unauthorized
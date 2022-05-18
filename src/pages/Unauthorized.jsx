import React from 'react'
import { Link }from 'react-router-dom'

const Unauthorized = () => {
    return(
        <div>
          Not Authorized
          <br/>
          <Link to = "/">Return to Login</Link>
        </div>

    )
    
}

export default Unauthorized
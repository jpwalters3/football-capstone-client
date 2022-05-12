import React from 'react'
import { Link }from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Premier League</h2>
      <nav>
          <Link to="/Home"> <button>Home</button> </Link>
          <Link to="/Statistics"><button>Statistics</button></Link>
          <Link to = "/"><button>Log Out</button> </Link>
      </nav>
    </div>
  )
}

export default Header

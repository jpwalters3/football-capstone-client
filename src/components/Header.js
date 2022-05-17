import React from 'react'
import { Link }from 'react-router-dom'
import Button from '../components/Button'
import { AdminContext } from '../App';

const Header = () => {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);
  
  return (
    <div className = {"bg-fuchsia-900 p-3"}>
      <h2 className = {"text-stone-50 font-serif text-5xl mb-5 mt-15"}>Premier League</h2>
      <nav>
          <Link to="/Home"><Button label={"Home"}/></Link>
          <Link to="/Statistics"><Button label={"Statistics"}/></Link>
          <Link to = "/"><Button label={"Log Out"}/></Link>
          {/* <Link to ="/Admin"><Button label={"Admin View"}/></Link> */}
          {isAdmin ? <Link to ="/Admin"><Button label={"Admin View"} secondary/></Link>: <></>}
      </nav>
    </div>
  )
}

export default Header

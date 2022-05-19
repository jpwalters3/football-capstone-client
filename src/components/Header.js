import React from 'react'
import { Link }from 'react-router-dom'
import Button from '../components/Button'
import { AdminContext } from '../App';
import { TokenContext } from '../App';

const Header = () => {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);
  const [token, setToken] = React.useContext(TokenContext);
  
  return (
    <div   
      class="
        bg-gradient-to-r
        from-fuchsia-500
        via-violet-500
        to-indigo-500
        top-0 z-50" >
      <nav class = 'mb-8'> 
        <img src = {require('../img/logo-main.png')} width = '200'/>
          <Link to="/Home"><Button label={"Home"}/></Link>
          <Link to="/Statistics"><Button label={"Statistics"}/></Link>
          <Link to = "/"><Button label={"Log Out"} onClick = {()=>{setIsAdmin(false); setToken("")}}/></Link>
          {isAdmin ? <Link to ="/Admin"><Button label={"Admin"} secondary/></Link>: <></>}
      </nav>
    </div>
  )
}

export default Header

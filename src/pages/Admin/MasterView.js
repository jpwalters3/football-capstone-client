import React from 'react'
import '../../styles/MasterView.css'
import DisplayBar from '../../components/AdminDisplays/DisplayBar'
import Header from '../../components/Header'
import { AdminContext } from '../../App';
import { Link }from 'react-router-dom'

const MasterView = () => {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

  return (
    <>
      {isAdmin ? 
        <div>
        <Header />
        <DisplayBar />
        </div>
      : 
        <div>
          Not Authorized
          <br/>
          <Link to = "/">Return to Login</Link>
        </div>}
    </>
  )
}

export default MasterView

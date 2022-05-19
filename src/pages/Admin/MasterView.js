import React from 'react'
import '../../styles/MasterView.css'
import DisplayBar from '../../components/AdminDisplays/DisplayBar'
import Header from '../../components/Header'
import { AdminContext } from '../../App';
import { Link }from 'react-router-dom'
import Unauthorized from '../Unauthorized';

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
        <Unauthorized/>}
    </>
  )
}

export default MasterView

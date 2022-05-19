import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import EditPlayerForm from '../../components/Forms/EditPlayerForm'
import { GetPlayerData } from '../../api/Player'
import { AdminContext } from '../../App';
import Unauthorized from '../Unauthorized';

const EditPlayer = () => {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

  const [player, setPlayer] = 
  useState({
    playerId: 1,
    firstName: '',
    lastName: '',
    dateOfBirth: '1970-01-01',
    isActive: true,
    isOnLoan: false,
    clubId: 1,
    positionId: 1
  });

  useEffect(()=>{
    GetPlayerData(urlparams.get('id'), setPlayer)
  }, [])

    let urlparams = new URLSearchParams(window.location.search)
  return (
    <>
      {isAdmin ? 
        <div>
          <Header />
          <EditPlayerForm player = {player}/>
        </div>
      :
        <Unauthorized/>}
    </>
  )
}

export default EditPlayer

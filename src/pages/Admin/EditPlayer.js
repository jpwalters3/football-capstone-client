import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import EditPlayerForm from '../../components/Forms/EditPlayerForm'
import { GetPlayerData } from '../../api/Player'
import { AdminContext } from '../../App';
import Unauthorized from '../Unauthorized';
import PlayerPerformancesTable from '../../components/AdminDisplays/PlayerPerformancesTable'

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
          <br/><h1>Edit {player.firstName + ' ' + player.lastName}</h1><br/>
          <EditPlayerForm player = {player}/> <br/><br/>
          <PlayerPerformancesTable player ={player}/>
          <br/><br/><br/><br/><br/><br/>
        </div>
      :
        <Unauthorized/>}
    </>
  )
}

export default EditPlayer

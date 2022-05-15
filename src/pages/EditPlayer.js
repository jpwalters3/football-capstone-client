import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import EditPlayerForm from '../components/EditPlayerForm'
import { GetPlayerData } from '../api/GetPlayerData'

const EditPlayer = () => {

  const [player, setPlayer] = 
  useState({
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
    <div>
        <Header />
        <p>TODO: PUT fetch request</p>

      <EditPlayerForm player = {player}/>
    </div>
  )
}

export default EditPlayer

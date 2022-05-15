import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { GetPlayerData } from '../api/GetPlayerData'

const EditPlayer = () => {
    let urlparams = new URLSearchParams(window.location.search)
    const [player, setPlayer] = useState({});

    useEffect (()=>{GetPlayerData(urlparams.get('id'), setPlayer)})

  return (
    <div>
        <Header />
        <p>TODO: PUT fetch request</p>
        <p>TODO: autopopulate with GET fetch request</p>
        <p>TODO: form display </p>
      <h3>Edit player {player.playerId}</h3>
    </div>
  )
}

export default EditPlayer

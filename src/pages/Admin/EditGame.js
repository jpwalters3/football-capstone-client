import React from 'react'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import { GetGameData } from '../../api/Match' 
import EditMatchForm from '../../components/Forms/EditMatchForm'
import { AdminContext } from '../../App';
import Unauthorized from '../Unauthorized';

const EditGame = () => {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

  let urlparams = new URLSearchParams(window.location.search)

  const [game, setGame] = useState({
    matchId: 1,
    matchDate: '1970-01-01',
    numberOfAttendees: 0,
    homeScore: 0,
    awayScore: 0,
    homeClubId: 1,
    visitingClubId: 2,
    seasonId: 1
  })

  useEffect(()=>{
    GetGameData(setGame, urlparams.get('id'))
  },[])

  return (
    <>
      {isAdmin ?
        <div>
          <Header/>
          <h3>Update Game {game.matchId}</h3>
          <EditMatchForm match = {game}/>
        </div>
      :
        <Unauthorized/>
      }
    </>

    
  )
}

export default EditGame

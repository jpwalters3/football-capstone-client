import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetPlayersByTeam } from '../api/GetPlayersByTeam'
import PlayerDisplay from './PlayerDisplay'

const ClubRoster = ({id}) => {
    const [players, setPlayers] = useState([{}])

    useEffect(()=>{
        GetPlayersByTeam(id, setPlayers)
    }, [])
  return (
    <div>
      <table className = "club-roster">
          <tbody>
          <tr>
          <th>Id</th><th colSpan="2">Player</th><th>DOB</th><th colSpan="2">Club</th><th>Position</th><th>Status</th>
          </tr>
          {players.map(p => <PlayerDisplay player = {p}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ClubRoster

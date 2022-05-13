import React from 'react'
import { Link } from 'react-router-dom'

const TeamDisplay = ({club}) => {
  return (
    <tr className = "team-display">
      <td> 
        <img src = {require('../img/club-' + club.teamId + '-logo.png')} className = "team-icon" alt =""/>
      </td>
      <td>{club.teamName}</td>
      <td>  {club.wins}-{club.losses}-{club.draws}  </td>
      <td>  {club.points} points</td>
      <td> 
        <Link to={"/Roster?id=" + club.teamId}> <button>Roster</button> </Link>
        <Link to={"/Schedule?id=" + club.teamId}> <button>Schedule</button> </Link>
      </td>
    </tr>
  )
}

export default TeamDisplay

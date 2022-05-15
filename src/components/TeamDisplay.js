import React from 'react'
import { Link } from 'react-router-dom'

const TeamDisplay = ({club}) => {
  var imgId;
  if (club.clubId > 3) imgId = 0;
  else imgId = club.clubId;

  return (
    <tr className = "team-display">
      <td> 
        <img src = {require('../img/club-' + imgId + '-logo.png')} className = "team-icon" alt =""/>
      </td>
      <td>{club.name}</td>
      <td>  {club.wins}-{club.losses}-{club.draws}  </td>
      <td>  {club.points} points</td>
      <td> 
        <Link to={"/Roster?id=" + club.clubId}> <button>Roster</button> </Link>
        <Link to={"/Schedule?id=" + club.clubId}> <button>Schedule</button> </Link>
      </td>
    </tr>
  )
}

export default TeamDisplay

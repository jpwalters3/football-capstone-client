import React from 'react'

const TeamDisplay = ({club}) => {
  return (
    <tr class = "team-display">
      <td> 
        <img src = {require('../img/club-' + club.teamId + '-logo.png')} class = "team-icon"/>
      </td>
      <td>{club.teamName}   </td>
      <td>  {club.wins}-{club.losses}-{club.draws}  </td>
      <td>  {club.points} points</td>
    </tr>
  )
}

export default TeamDisplay

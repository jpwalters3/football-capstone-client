import React from 'react'
import { Link } from 'react-router-dom'

const TeamDisplay = ({club}) => {
  var imgId;
  if (club.clubId > 3) imgId = 0;
  else imgId = club.clubId;

  return (
    <tr className = "team-display" key = {club.clubId}>
      <td key = {club.clubId + "img"}> 
        <img src = {require('../img/club-' + imgId + '-logo.png')} className = "team-icon" alt =""/>
      </td>
      <td key = {club.clubId + "name"}> {club.name}</td>
      <td key = {club.clubId + "wld"}>  {club.wins}-{club.losses}-{club.draws}  </td>
      <td key = {club.clubId + "points"}>  {club.points} points</td>
      <td key = {club.clubId + "links"}> 
        <Link key = {club.clubId + "roster"} to={"/Roster?id=" + club.clubId}> <button>Roster</button> </Link>
        <Link key = {club.clubId + "schedule"} to={"/Schedule?id=" + club.clubId}> <button>Schedule</button> </Link>
      </td>
    </tr>
  )
}

export default TeamDisplay

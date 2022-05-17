import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteGame } from '../api/DeleteGame'
const AdminMatchDisplay = ({match}) => {
  function clickHandler(){
      DeleteGame(match.matchId);
      window.location.reload();
  }
  return (
    <tr>
        <td>{match.matchId}</td>
        <td>{match.matchDate}</td>
        <td>{match.homeScore}</td>
        <td>{match.awayScore}</td>
        <td>{match.homeClubId}</td>
        <td>{match.visitingClubId}</td>
        <td>{match.seasonId}</td>
        <td>
            <button>Edit</button>
            <button onClick = {clickHandler}>Delete</button>
        </td>

    </tr>
  )
}

export default AdminMatchDisplay

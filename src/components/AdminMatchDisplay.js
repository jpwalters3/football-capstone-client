import React from 'react'
import { Link } from 'react-router-dom'
const AdminMatchDisplay = ({match}) => {
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
            <button>Delete</button>
        </td>

    </tr>
  )
}

export default AdminMatchDisplay

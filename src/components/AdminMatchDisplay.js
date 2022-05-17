import React from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';

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
            <button><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></button>
            <button><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
        </td>

    </tr>
  )
}

export default AdminMatchDisplay

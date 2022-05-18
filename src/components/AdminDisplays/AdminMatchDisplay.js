import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteGame } from '../../api/Match'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';

const AdminMatchDisplay = ({match}) => {
  function clickHandler(){
      if(window.confirm("This change is permanate, are you sure you want to delete?")) DeleteGame(match.matchId);
  }
  return (
    <tr>
        <td>{match.matchId}</td>
        <td>{match.matchDate}</td>
        <td>{match.homeClubName}</td>
        <td>{match.homeScore}</td>
        <td>{match.awayScore}</td>
        <td>{match.visitingClubName}</td>
        <td>{match.seasonYear}</td>
        <td>
            <Link to = {"/Admin/EditGame?id=" + match.matchId}><button><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></button></Link>
            <button onClick = {clickHandler}><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
        </td>

    </tr>
  )
}

export default AdminMatchDisplay

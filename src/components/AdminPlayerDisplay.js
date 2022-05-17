import React from 'react'
import PlayerStat from "./PlayerStat";
import HistoryList from './HistoryList';
import { Link } from 'react-router-dom'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';

const AdminPlayerDisplay = ({player}) => {

    return(
        <>
            <tr>
                <td>{player.playerId}</td>
                <td colSpan="2">{player.firstName + " " + player.lastName}</td>
                <td>{player.dateOfBirth}</td>
                <td colSpan="2">{player.clubId}</td>
                <td>{player.positionId}</td>
                {player.isActive?<td>Active</td>:<td>Retired</td>}
                <td>
                    <Link to = {"/EditPlayer?id=" + player.playerId}><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
                    <button><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
                </td>
            </tr>
        </>
    ) 
}

export default AdminPlayerDisplay
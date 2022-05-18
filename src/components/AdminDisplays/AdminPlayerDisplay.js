import React from 'react';
import { Link } from 'react-router-dom';
import { DeletePlayer } from '../../api/DeletePlayer';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';

const AdminPlayerDisplay = ({player}) => {

    function clickHandler(){
        DeletePlayer(player.playerId);
    }
    
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
                    <Link to = {"/Admin/EditPlayer?id=" + player.playerId}><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
                    <button onClick = {clickHandler}><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
                </td>
            </tr>
        </>
    ) 
}

export default AdminPlayerDisplay
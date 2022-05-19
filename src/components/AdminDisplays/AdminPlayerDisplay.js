import React from 'react';
import { Link } from 'react-router-dom';
import { DeletePlayer } from '../../api/Player';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import { TokenContext } from '../../App';

const AdminPlayerDisplay = ({player}) => {
    const [token, setToken] = React.useContext(TokenContext);

    function clickHandler(){
        if(window.confirm("This change is permanent, are you sure you want to delete?")) DeletePlayer(player.playerId, token);
    }
    
    return(
        <>
            <tr>
            <td>{player.playerId}</td>
                <td colSpan="2">{player.firstName + " " + player.lastName}</td>
                <td>{player.dateOfBirth.substring(0,10)}</td>
                <td colSpan="2">{player.clubName}</td>
                <td>{player.positionName}</td>
                {player.isActive?<td>Active</td>:<td>Retired</td>}
                <td>{player.clubId}</td>
                <td>{player.positionId}</td>
                <td>
                    <Link to = {"/Admin/EditPlayer?id=" + player.playerId}><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
                    <button onClick = {clickHandler}><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
                </td>
            </tr>
        </>
    ) 
}

export default AdminPlayerDisplay
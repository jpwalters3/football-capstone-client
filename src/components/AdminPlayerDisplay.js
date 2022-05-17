import React from 'react'
import PlayerStat from "./PlayerStat";
import HistoryList from './HistoryList';
import { Link } from 'react-router-dom'
import { DeletePlayer } from '../api/DeletePlayer';

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
                    <button onClick = {clickHandler}>Delete</button>
                    <Link to = {"/EditPlayer?id=" + player.playerId}><button>Edit</button></Link>
                </td>
            </tr>
        </>
    ) 
}

export default AdminPlayerDisplay
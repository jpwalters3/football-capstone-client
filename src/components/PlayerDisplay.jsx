import React from 'react'
import PlayerStat from "../components/PlayerStat";
import HistoryList from './HistoryList';
import { useState } from 'react'


const PlayerDisplay = ({player}) => {
    const [statMode, setStatMode] = useState(false);
    const [historyMode, setHistoryMode] = useState(false);
    return(
        <>
            <tr>
                <td>{player.playerId}</td>
                <td colSpan="2">{player.firstName + " " + player.lastName}</td>
                <td>{player.dateOfBirth}</td>
                <td colSpan="2">{player.clubId}</td>
                <td>{player.positionId}</td>
                {player.isActive?<td>Active</td>:<td>Retired</td>}
                <td><button type="button" onClick = {()=>{setStatMode(!statMode)}}>Stats</button></td>
                <td><button type="button" onClick = {()=>{setHistoryMode(!historyMode)}}>History</button></td>
            </tr>

            {statMode && <PlayerStat playerId={player.playerId}/>}
            {historyMode && <HistoryList playerId={player.playerId}/>}
        </>
    ) 
}

export default PlayerDisplay
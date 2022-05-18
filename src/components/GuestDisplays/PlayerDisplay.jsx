import React from 'react'
import PlayerStat from "./PlayerStat";
import HistoryList from './HistoryList';
import { useState } from 'react'
import { ArchiveIcon, ChartSquareBarIcon } from '@heroicons/react/solid';
import '../../styles/Landing.css'

const PlayerDisplay = ({player}) => {
    const [statMode, setStatMode] = useState(false);
    const [historyMode, setHistoryMode] = useState(false);
    if (statMode) {
        var color = 'slate-900';
    }
    else{
        color = 'purple-500';
    }
    if (historyMode) {
        var color2 = 'slate-900';
    }
    else{
        color2 = 'purple-500';
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
                <td>
                    <button type="button" onClick = {()=>{setStatMode(!statMode)}}><ChartSquareBarIcon className={`inline h-10 w-10 text-${color}`}/></button>
                </td>
                <td>
                <button type="button" onClick = {()=>{setHistoryMode(!historyMode)}}><ArchiveIcon className={`inline h-10 w-10 text-${color2}`}/></button>
                </td>
            </tr>
            
            {statMode && <PlayerStat playerId={player.playerId}/>}
            {historyMode && <HistoryList playerId={player.playerId}/>}
        </>
    ) 
}

export default PlayerDisplay
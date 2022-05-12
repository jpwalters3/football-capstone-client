import React from 'react'
import PlayerStat from "../components/PlayerStat";
import { useState } from 'react'


const PlayerDisplay = ({player}) => {
    const [statMode, setStatMode] = useState(false);
    return(
        <>
            <tr>
                <td>{player.playerId}</td>
                <td colSpan="2">{player.firstName + " " + player.lastName}</td>
                <td>{player.dateOfBirth.substring(0,10)}</td>
                <td colSpan="2">{player.clubId}</td>
                <td>{player.positionId}</td>
                <td><button type="button" onClick = {()=>{setStatMode(!statMode)}}>Stats</button></td>
            </tr>

            {statMode && <PlayerStat playerStat={player}/>}
    
        </>
    )
}

export default PlayerDisplay
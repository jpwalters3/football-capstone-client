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
                <td>{player.dateOfBirth}</td>
                <td colSpan="2">{player.clubId}</td>
                <td>{player.positionId}</td>
                <td><button type="button" onClick = {()=>{setStatMode(!statMode)}}>Stats</button></td>
            </tr>

            {statMode && <PlayerStat playerId={player.playerId}/>}
        </>
    ) 
}

export default PlayerDisplay
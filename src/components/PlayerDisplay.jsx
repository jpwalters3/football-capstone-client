import React from 'react'
import PlayerStat from "../components/PlayerStat";

let statMode = false;

const PlayerDisplay = ({player}) => {
    return(
        <>
            <tr>
                <td>{player.playerId}</td>
                <td colSpan="2">{player.playerName}</td>
                <td>{player.dateOfBirth}</td>
                <td colSpan="2">{player.clubName}</td>
                <td>{player.position}</td>
                <td>{player.isActive ? `Active`:`Retired`}</td>
                <td><button type="button" onClick = {()=>{statMode = !statMode}}>Stats</button></td>
            </tr>

            {statMode ? <PlayerStat playerStat={player}></PlayerStat>:<tr><td>hi</td></tr>}
    
        </>
    )
}

export default PlayerDisplay
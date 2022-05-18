import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetPlayerStats } from '../../api/Player'

const PlayerStat = ({playerId}) => {
    const [playerData, setPlayerData] = useState({})

    useEffect(() =>{
        GetPlayerStats(playerId, setPlayerData)
    }, [])

    return(
        <tr>
        <td colSpan="9">
        <table className = "player-stats">
            <tbody>
            <tr><td>Shots:</td><td> {playerData.shots}</td> </tr>
            <tr><td>On Target: </td><td>{playerData.shotsOnTarget}</td></tr>
            <tr><td>Goals: </td><td>{playerData.goals}</td></tr>
            <tr><td>Assits: </td><td>{playerData.assists}</td></tr>
            <tr><td>Saves: </td><td>{playerData.saves}</td></tr>
            <tr><td>Fouls: </td><td>{playerData.fouls}</td></tr>
            </tbody>
        </table>
        </td>
        </tr>
    )
}

export default PlayerStat
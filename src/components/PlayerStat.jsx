import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetPlayerStats } from '../api/GetPlayerStats'
const PlayerStat = ({playerId}) => {
    const [playerData, setPlayerData] = useState({})

    useEffect(() =>{
        GetPlayerStats(playerId, setPlayerData)
    }, [])

    return(
        <tr>
            <td>Shots: {playerData.shots}</td>
            <td>On Target: {playerData.shotsOnTarget}</td>
            <td>Goals: {playerData.goals}</td>
            <td>Assits: {playerData.assists}</td>
            <td>Saves: {playerData.saves}</td>
            <td>Fouls: {playerData.fouls}</td>
        </tr>
    )
}

export default PlayerStat
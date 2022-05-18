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
            <tr>Shots: {playerData.shots} </tr>
            <tr>On Target: {playerData.shotsOnTarget}</tr>
            <tr>Goals: {playerData.goals}</tr>
            <tr>Assits: {playerData.assists}</tr>
            <tr>Saves: {playerData.saves}</tr>
            <tr>Fouls: {playerData.fouls}</tr>
            </tbody>
        </table>
        </td>
        </tr>
    )
}

export default PlayerStat
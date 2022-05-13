import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const PlayerStat = ({playerId}) => {
    const [playerData, setPlayerData] = useState({})
    useEffect(() =>{
        fetch("http://localhost:5101/api/reports/" + playerId)
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            setPlayerData(json);
        })
    })
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
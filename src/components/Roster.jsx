import PlayerDisplay from "./PlayerDisplay";
import '../styles/Roster.css'
import React, {useEffect} from 'react'
import { useState } from 'react'
import { GetAllPlayers } from '../api/GetAllPlayers'

function Roster(){

    const [players, setPlayers] = useState([{}]);

    useEffect(() =>{
        GetAllPlayers(setPlayers)
    })
    return(
        <>
        
            <table className = "roster-display">
                <tbody>
                    <tr>
                        <th>Id</th><th colSpan="2">player</th><th>DOB</th><th colSpan="2">club</th><th>position</th><th>status</th>
                    </tr>
                    {players.map(p => <PlayerDisplay player = {p}/>)}
                </tbody>
            </table>

        </>
    )
}

export default Roster;
import PlayerDisplay from "./PlayerDisplay";
import '../styles/Roster.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetAllPlayers } from '../api/GetAllPlayers'
import { Link } from 'react-router-dom'

function ViewAllPlayers(){

    const [players, setPlayers] = useState([{}]);

    useEffect(()=> {
        GetAllPlayers(setPlayers);
    }, [])

    return(
        <>
            <Link to = {"/AddPlayer"}> <button>Add New Player</button></Link>
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

export default ViewAllPlayers;
import AdminPlayerDisplay from "./AdminPlayerDisplay";
import '../../styles/Roster.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetAllPlayers } from '../../api/GetAllPlayers'
import { Link } from 'react-router-dom'
import Button from '../Button'
import {PlusIcon} from '@heroicons/react/solid'

function ViewAllPlayers(){

    const [players, setPlayers] = useState([{}]);

    useEffect(()=> {
        GetAllPlayers(setPlayers);
    }, [])

    return(
        <>
            <Link to = {"/Admin/AddPlayer"}><PlusIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
            <table className = "roster-display">
                <tbody>
                    <tr>
                        <th>Id</th><th colSpan="2">player</th><th>DOB</th><th colSpan="2">club</th><th>position</th><th>status</th>
                    </tr>
                    {players.map(p => <AdminPlayerDisplay player = {p}/>)}
                </tbody>
            </table>

        </>
    )
}

export default ViewAllPlayers;
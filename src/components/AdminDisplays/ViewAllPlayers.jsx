import AdminPlayerDisplay from "./AdminPlayerDisplay";
import '../../styles/Roster.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetAllPlayers } from '../../api/Player'
import { Link } from 'react-router-dom'
import Button from '../Button'
import {PlusIcon} from '@heroicons/react/solid'
import AddPlayer from '../Forms/AddPlayer'

function ViewAllPlayers(){
    const [show, setShow] = useState(false);
    const [players, setPlayers] = useState([{}]);

    useEffect(()=> {
        GetAllPlayers(setPlayers);
    }, [players])

    function addClickHandler(){
        setShow(!show);
    }

    return(
        <>
            <div onClick = {addClickHandler}><PlusIcon className={"inline h-10 w-10 text-purple-500"}/></div>
            {show && <AddPlayer />}
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
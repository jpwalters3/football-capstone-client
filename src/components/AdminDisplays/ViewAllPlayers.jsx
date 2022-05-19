import AdminPlayerDisplay from "./AdminPlayerDisplay";
import '../../styles/Roster.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetAllPlayers } from '../../api/Player'
import AddPlayer from '../Forms/AddPlayer'

function ViewAllPlayers(){
    const [show, setShow] = useState(false);
    const [players, setPlayers] = 
    useState([{
        playerId: 1,
        dateOfBirth: '1970-01-01'
    }]);

    useEffect(()=> {
        GetAllPlayers(setPlayers);
    }, [players])

    function addClickHandler(){
        setShow(!show);
    }

    return(
        <>
            <br/>
            <button onClick = {addClickHandler}
            class="bg-indigo-500 
            hover:bg-indigo-700 
            text-white 
            font-bold 
            py-1 
            px-2
            rounded-full">Add Player</button>
            <br/>

            {show && <AddPlayer />}
            <table className = "roster-display" class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ml-20">
                <tbody>
                    <tr>
                        <th>Id</th><th colSpan="2">Player</th><th>DOB</th><th colSpan = "2">Club</th><th>Position</th><th>Status</th>
                    </tr>
                    {players.map(p => <AdminPlayerDisplay player = {p}/>)}
                </tbody>
            </table>

        </>
    )
}

export default ViewAllPlayers;
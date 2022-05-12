import PlayerDisplay from "./PlayerDisplay";
import '../styles/Roster.css'
import React, {useEffect} from 'react'
import { useState } from 'react'
//Example info passed in
// const players =
// [
//     {
//         playerId:1,
//         playerName:'John Smith',
//         dateOfBirth:'1990-01-01',
//         clubName:'Manchester Untd',
//         position: 'goalie',
//         isActive:true,
//         shots:12,
//         shotsOnTarget:2,
//         goals:2,
//         assists:3,
//         saves:1,
//         fouls:0,
//         dribbleSuccessRate:50,
//         passCompletionRate:80,
//         tackleSuccessRate:25,
//     },
//     {
//         playerId:1,
//         playerName:'John Smith',
//         dateOfBirth:'1990-01-01',
//         clubName:'Manchester Untd',
//         position: 'goalie',
//         isActive:true,
//         shots:12,
//         shotsOnTarget:2,
//         goals:2,
//         assists:3,
//         saves:1,
//         fouls:0,
//         dribbleSuccessRate:50,
//         passCompletionRate:80,
//         tackleSuccessRate:25,
//     }
// ]


function Roster(){

    const [players, setPlayers] = useState([{}]);

    useEffect(() =>{
        fetch("http://localhost:5101/api/player")
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            setPlayers(json);
        })
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
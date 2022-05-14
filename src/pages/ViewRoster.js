// import React from 'react'
// import Header from '../components/Header'
// import Roster from '../components/Roster'

// const ViewRoster = () => {
//     let urlparams = new URLSearchParams(window.location.search)
//   return (
//     <div>
//         <Header />
//         <h3>Team {urlparams.get('id')} Roster Display</h3>
//         <p>TODO: get request by id calling stored proceedure for player statistics by team</p>
//         <p>TODO: display for players</p>
//         <p>TODO: Add Edit and Delete page links for players</p>
//         <p>TODO: Add View player history navigation</p>
        
//     </div>
//   )
// }

// export default ViewRoster
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import PlayerDisplay from '../components/PlayerDisplay'

function ViewRoster(){
    const [players, setPlayers] = useState([{}]);

    let urlparams = new URLSearchParams(window.location.search)

    useEffect(() =>{
        fetch("http://localhost:5101/api/club/"+urlparams.get('id')+"/player")
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
            <Header/>
            <h3>Team {urlparams.get('id')} Roster Display</h3>
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
export default ViewRoster

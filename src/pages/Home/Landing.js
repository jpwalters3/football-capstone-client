import React from 'react'
import TeamDisplay from '../../components/GuestDisplays/TeamDisplay'
import '../../styles/Landing.css'
import Header from '../../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetClubRecords } from '../../api/Club'

const Landing = () => {
    const [clubs, setClubs] = useState([{}]);
    useEffect(() =>{
        GetClubRecords(setClubs)
    }, [])
  return (
    <>
    <Header />
    <h1 className = "text-center text-xl font-serif text-fuchshia-650">League Table</h1>
    <table id = "team-records">
        <tbody>
            <tr>
                <th></th><th>Teams</th><th>W/L/D</th><th>Points</th><th>Roster</th><th>Schedule</th>
            </tr>
            {clubs.map(team => <TeamDisplay club = {team}/>)}
        </tbody>
    </table>
    <p>TODO: records should only be for the current season</p>
    </>
  )
}

export default Landing

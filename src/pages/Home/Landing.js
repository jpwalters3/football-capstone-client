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
    <h1 className = "text-center text-3xl font-sans text-indigo-900 mb-4">League Records</h1>
    <div class = 'mb-36'>
    <table id = "team-records">
        <tbody>
            <tr>
                <th></th><th>Teams</th><th>W/L/D</th><th>Points</th><th>Roster</th><th>Schedule</th>
            </tr>
            {clubs.map(team => <TeamDisplay club = {team}/>)}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Landing

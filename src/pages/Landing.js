import React from 'react'
import TeamDisplay from '../components/TeamDisplay'
import '../styles/Landing.css'
import Header from '../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetClubRecords } from '../api/GetClubRecords'

const Landing = () => {
    const [clubs, setClubs] = useState([{}]);
    useEffect(() =>{
        GetClubRecords(setClubs)
    }, [])
  return (
    <>
    <Header />
    <table id = "team-records">
        <tbody>
            <tr>
                <th></th><th>team</th><th>record</th><th>points</th>
            </tr>
            {clubs.map(team => <TeamDisplay club = {team}/>)}
        </tbody>
    </table>
    </>
  )
}

export default Landing

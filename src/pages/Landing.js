import React from 'react'
import TeamDisplay from '../components/TeamDisplay'
import '../styles/Landing.css'
import Header from '../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'

const teams =
    [
    {
    teamId: 1,
    teamName: "Chelsea",
    wins: 10,
    losses: 4,
    draws: 1,
    points: 10 * 3 + 1
    },
    {
    teamId: 2,
    teamName: "Manchester Utd",
    wins: 8,
    losses: 6,
    draws: 1,
    points: 8 * 3 + 1
    },
    {teamId: 3,
    teamName: "Everton",
    wins: 7,
    losses: 9,
    draws: 0,
    points: 7 * 3
    }
    ]

const Landing = () => {
    const [clubs, setClubs] = useState([{}]);
    useEffect(() =>{
        fetch("http://localhost:5101/api/reports/clubs")
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            setClubs(json);
        })
    })
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

import React from 'react'
import TeamDisplay from '../components/TeamDisplay'

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
    teamName: "Manchester Untd",
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

const landing = () => {
  return (
      <>
      <h1> Premier League Records </h1>
        <table id = "team-records">
            <tbody>
                <tr>
                    <th></th><th>team</th><th>record</th><th>points</th>
                </tr>
                {teams.map(team => <TeamDisplay club = {team}/>)}
            </tbody>
        </table>
    </>
  )
}

export default landing

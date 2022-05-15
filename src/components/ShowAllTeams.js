import React from 'react'
import { Link } from 'react-router-dom'
import { GetAllClubs } from '../api/GetAllClubs'
import AdminTeamDisplay from './AdminTeamDisplay'
import { useEffect, useState } from 'react'

const ShowAllTeams = () => {
  const [teams, setTeams] = useState([{}])
  useEffect(()=>{
    GetAllClubs(setTeams);
  }, [])

  return (
    <div>
      <Link to = "/AddTeam"><button>Add Team</button></Link>
      <table>
        <tbody>
          <tr>
            <th>ID</th><th>Name</th><th>Founding Date</th><th>City</th>
          </tr>
          {teams.map((c)=><AdminTeamDisplay club = {c}/>)}
        </tbody>
      </table>

    </div>
  )
}

export default ShowAllTeams

import React from 'react'
import { Link } from 'react-router-dom'
import { GetAllClubs } from '../api/GetAllClubs'
import AdminTeamDisplay from './AdminTeamDisplay'
import { useEffect, useState } from 'react'
import {PlusIcon} from '@heroicons/react/solid'

const ShowAllTeams = () => {
  const [teams, setTeams] = useState([{}])
  useEffect(()=>{
    GetAllClubs(setTeams);
  }, [])

  return (
    <div>
      <Link to = "/AddTeam"><PlusIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
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

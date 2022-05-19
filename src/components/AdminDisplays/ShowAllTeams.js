import React from 'react'
import { Link } from 'react-router-dom'
import { GetAllClubs } from '../../api/Club'
import AdminTeamDisplay from './AdminTeamDisplay'
import { useEffect, useState } from 'react'
import {PlusIcon} from '@heroicons/react/solid'
import AddTeam from '../Forms/AddTeam'

const ShowAllTeams = () => {
  const [teams, setTeams] = 
    useState([{
      clubId: 1,
      foundingDate: '1970-01-01'
    }])
  const [show, setShow] = useState(false)
  useEffect(()=>{
    GetAllClubs(setTeams);
  }, [teams])

  function addClickHandler(){
    setShow(!show)
  }
  return (
    <div>
      <br/>
      <button onClick = {addClickHandler}
      class="bg-indigo-500 
      hover:bg-indigo-700 
      text-white 
      font-bold 
      py-1 
      px-2
      rounded-full">Add Team</button>

      {show && <AddTeam/>}
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

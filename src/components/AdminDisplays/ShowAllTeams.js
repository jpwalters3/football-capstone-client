import React from 'react'
import { Link } from 'react-router-dom'
import { GetAllClubs } from '../../api/Club'
import AdminTeamDisplay from './AdminTeamDisplay'
import { useEffect, useState } from 'react'
import {PlusIcon} from '@heroicons/react/solid'
import AddTeam from '../Forms/AddTeam'

const ShowAllTeams = () => {
  const [teams, setTeams] = useState([{}])
  const [show, setShow] = useState(false)
  useEffect(()=>{
    GetAllClubs(setTeams);
  }, [])

  function addClickHandler(){
    setShow(!show)
  }
  return (
    <div>
      <div onClick = {addClickHandler}><PlusIcon className={"inline h-10 w-10 text-purple-500"}/></div>
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

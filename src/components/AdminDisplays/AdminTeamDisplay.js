import React from 'react'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import {Link} from 'react-router-dom'

const AdminTeamDisplay = ({club}) => {
  return (
    <tr>
      <td>{club.clubId}</td>
      <td>{club.name}</td>
      <td>{club.foundingDate}</td>
      <td>{club.city}</td>
      <td>
          <Link to ={"/Admin/EditClub?id=" + club.clubId}><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
          <button><TrashIcon className={"inline h-10 w-10 text-purple-500"}/></button>
      </td>
    </tr>
  )
}

export default AdminTeamDisplay





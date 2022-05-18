import React from 'react'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import { DeleteClub } from '../../api/Club';
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
      </td>
    </tr>
  )
}

export default AdminTeamDisplay





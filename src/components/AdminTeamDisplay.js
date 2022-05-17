import React from 'react'
import { Link } from 'react-router-dom'

const AdminTeamDisplay = ({club}) => {
  return (
    <tr>
      <td>{club.clubId}</td>
      <td>{club.name}</td>
      <td>{club.foundingDate}</td>
      <td>{club.city}</td>
      <td>
          <Link to ={"/EditClub?id=" + club.clubId}><button>Edit</button></Link>
      </td>
    </tr>
  )
}

export default AdminTeamDisplay

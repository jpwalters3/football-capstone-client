import React from 'react'

const AdminTeamDisplay = ({club}) => {
  return (
    <tr>
      <td>{club.clubId}</td>
      <td>{club.name}</td>
      <td>{club.foundingDate}</td>
      <td>{club.city}</td>
      <td>
          <button>Edit</button>
      </td>
    </tr>
  )
}

export default AdminTeamDisplay

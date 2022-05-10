import React from 'react'

const TeamDisplay = ({club}) => {
  return (
    <>
      <table className = "team-display">
      <tbody>
        <tr>
          <td>
          <img src = {require('../img/club-' + club.teamId + '-logo.png')} class = "team-icon"/>
          </td>
        <td> {club.teamName} </td>
        <td> {club.wins}-{club.losses}-{club.draws} </td>
        <td> {club.points} points </td>
      </tr>
      </tbody>
    </table>
    </>
  )
}

export default TeamDisplay

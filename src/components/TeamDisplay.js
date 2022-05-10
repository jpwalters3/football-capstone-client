import React from 'react'
import logo1 from '../img/club-1-logo.png'
import logo2 from '../img/club-2-logo.png'
import logo3 from '../img/club-3-logo.png'

const TeamDisplay = ({club}) => {
  return (
    <>
      <table>
      <tbody>
        <tr>
          <td>
          <img src = {logo1} class = "team-icon"/>
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

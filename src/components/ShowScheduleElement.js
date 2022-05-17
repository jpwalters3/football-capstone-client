import React from 'react'

const ShowScheduleElement = ({match, teamId}) => {
  return (
    <tr>
        <td>{match.matchId}</td>
        <td>{match.matchDate}</td>
        <td>{match.numberOfAttendees}</td>
        <td>{match.homeScore + "-" + match.awayScore}</td>
        <td>{teamId === match.homeClubId ? match.homeClubId : match.visitingClubId}</td>
    </tr>
  )
}

export default ShowScheduleElement

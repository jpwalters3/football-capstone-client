import React from 'react'

const ShowScheduleElement = ({match, teamId}) => {
  return (
    <tr>
        <td>{match.matchId}</td>
        <td>{match.matchDate.substring(0,10)}</td>
        <td>{match.numberOfAttendees}</td>
        <td>{match.homeClubName}</td>
        <td>{match.homeScore + "-" + match.awayScore}</td>
        <td>{match.visitingClubName}</td>
    </tr>
  )
}

export default ShowScheduleElement

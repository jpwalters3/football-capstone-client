import React from 'react'
import { useEffect, useState } from 'react'
import { GetClubSchedule } from '../../api/Match';
import ShowScheduleElement from './ShowScheduleElement'

const ViewClubSchedule = ({id}) => {
    const [matches, setMatches] = 
    useState ([{
      matchId: 1,
      matchDate: '1970-01-01'
    }]);

    useEffect(()=>{
        GetClubSchedule(id, setMatches)
    }, [])

  return (
    <div>
      <table>
          <tbody>
              <tr>
                <th>ID</th><th>Date</th><th>Attendence</th><th>Score</th><th>Opponent</th>
              </tr>
              {matches.map( (m) => <ShowScheduleElement match = {m} teamId = {id}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ViewClubSchedule

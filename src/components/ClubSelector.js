import React from 'react'
import { useState, useEffect } from 'react'
import { GetAllClubs } from '../api/GetAllClubs'

const ClubSelector = () => {
    const [clubs, setClubs] = useState ([{
        clubId:1,
        clubName:"searching database..."
    }]);

    useEffect(()=>{
        GetAllClubs(setClubs)
        console.log(clubs)
    },[])

  return (
    <div>
        <lable>Club: </lable>
      <select>
          {clubs.map((c) => {
              return <option key = {c.clubId} value = {c.clubId}>{c.name}</option>
          })}
      </select>
    </div>
  )
}

export default ClubSelector

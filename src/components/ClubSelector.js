import React from 'react'
import { useState, useEffect } from 'react'
import { GetAllClubs } from '../api/Club'

const ClubSelector = ({docId, label}) => {
    const [clubs, setClubs] = useState ([{
        clubId:1,
        clubName:"searching database..."
    }]);

    useEffect(()=>{
        GetAllClubs(setClubs)
    },[])

  return (
    <div>
        <label>{label}: </label>
      <select id = {docId} class ="form-controll border border-solid border-gray-300">
          {clubs.map((c) => {
              return <option value = {c.clubId}>{c.name}</option>
          })}
      </select>
    </div>
  )
}

export default ClubSelector

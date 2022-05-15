import React from 'react'
import { useState, useEffect } from 'react'
import { GetAllClubs } from '../api/GetAllClubs'

const ClubSelector = () => {
    const [clubs, setClubs] = useState ([{}]);
    useEffect(()=>{
        GetAllClubs(setClubs)
    }, [])
  return (
    <div>
      <select>
          {clubs.map(c => {
              <option id = {c.clubId}>{c.name}</option>
          })}
      </select>
    </div>
  )
}

export default ClubSelector

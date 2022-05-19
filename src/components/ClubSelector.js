import React from 'react'
import { useState, useEffect } from 'react'
import { GetAllClubs } from '../api/Club'

const ClubSelector = ({docId, label, start}) => {
    const [clubs, setClubs] = useState ([{
        clubId:1,
        clubName:"searching database..."
    }]);
    const [val, setVal] = useState(start);

    useEffect(()=>{
        GetAllClubs(setClubs)
    },[])

  return (
    <div>
        <label>{label}: </label>
      <select id = {docId} value = {val} onChange = {(e)=>setVal(e.target.value)}
      class ="form-controll border border-solid border-gray-300">
          {clubs.map((c) => {
              return <option value = {c.clubId}>{c.name}</option>
          })}
      </select>
    </div>
  )
}

export default ClubSelector

import React from 'react'
import ClubSelector from './ClubSelector'
import { useState, useEffect } from 'react'
import { GetPlayerData } from '../api/GetPlayerData'

const EditPlayerForm = ({player}) => {
  
    useEffect(()=>{
      setFirstName(player.firstName);
      setLastName(player.lastName);
      setDob(player.dateOfBirth);
      setIsActive(player.IsActive);
      setClub(player.clubId);
      setPosition(player.positionId);
    }, [player])


    const [firstName, setFirstName] = useState(player.firstName);
    const [lastName, setLastName] = useState(player.lastName)
    const [dob, setDob]  = useState(player.dateOfBirth);
    const [isActive, setIsActive] = useState(player.isActive);
    const [club, setClub] = useState(player.clubId);
    const [position, setPosition] = useState(player.positionId);

  return (

    <div>
        <h3>Edit {player.firstName + " " + player.lastName}</h3>
 
        <form>
          <label>First Name: </label>
          <input type = "text" id = "first-name" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/> <br/>
          <label>Last Name: </label>
          <input type = "text" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/> <br/>
          <label>Date of Birth: </label>
          <input type = "date" value = {dob.substring(0,10)} onChange = {(e)=> setDob(e.target.value)}/> <br/>
          <label>Active: </label>
          <input type = "checkbox" value = {isActive} onChange = {(e)=> setIsActive(e.target.value)}/> <br/>
          <label>Club: </label>
          <ClubSelector /> <br/>
          <input type = "submit" value = "Update" />
        </form>
    </div>
  )
}

export default EditPlayerForm

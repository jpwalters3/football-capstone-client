import React from 'react'
import ClubSelector from './ClubSelector'
import { useState, useEffect } from 'react'
import { GetPlayerData } from '../api/GetPlayerData'
import { EditPlayer } from '../api/EditPlayer'

const EditPlayerForm = ({player}) => {
    const [toUpdate, setToUpdate] = useState(player);
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

    function submitHandler(e){
      e.preventDefault();

      
      player.firstName = document.getElementById('first-name').value;
      player.lastName = document.getElementById('last-name').value;
      player.dateOfBirth = document.getElementById('bday').value;
      player.clubId = document.getElementById('club').value;
      player.isActive = document.getElementById('isactive').checked;
      player.positionId = document.getElementById('position').value;

      

      EditPlayer(player);
    }


  return (

    <div>
        <h3>Edit {player.firstName + " " + player.lastName}</h3>
 
        <form onSubmit = {submitHandler}>
          <label>First Name: </label>
          <input type = "text" id = "first-name" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/> <br/>
          <label>Last Name: </label>
          <input type = "text" id = "last-name" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/> <br/>
          <label>Date of Birth: </label>
          <input type = "date" id = "bday" value = {dob.substring(0,10)} onChange = {(e)=> setDob(e.target.value)}/> <br/>
          <label>Active: </label>
          <input type = "checkbox" id = "isactive" value = {isActive} onChange = {(e)=> setIsActive(e.target.value)} checked/> <br/>
          <ClubSelector label = "Club" docId = "club"/> <br/>
          <label>Position: </label>
          <select id = "position" value = {position}>
            <option value = {1}>Striker</option>
            <option value = {2}>Midfielder</option>
            <option value = {3}>Defender</option>
            <option value = {4}>Goalie</option>
          </select>
          <input type = "submit" value = "Update" />
        </form>
    </div>
  )
}

export default EditPlayerForm

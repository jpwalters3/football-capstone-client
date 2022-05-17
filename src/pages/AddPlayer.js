import React from 'react'
import Header from '../components/Header'
import ClubSelector from '../components/ClubSelector'
import { PostPlayer } from '../api/PostPlayer'

const AddPlayer = () => {
  function FormSubmit(){
      const player = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dateOfBirth: document.getElementById('bday').value,
        positionId: document.getElementById('position').value,
        clubId: document.getElementById('club').value,
        isActive: document.getElementById('active').checked
      }

      PostPlayer(player);
  }
  
  return (
    <div>
      <Header/>
      <h3>Add a New Player</h3>
      <form onSubmit={FormSubmit}>
          <label>First Name: </label>
          <input type = "text" id = "firstName"/> <br/>
          <label>Last Name: </label>
          <input type = "text" id = "lastName"/> <br/>
          <label>Date of Birth: </label>
          <input type = "date" id = "bday"/> <br/>
          <label>Position: </label>
          <select id = "position">
            <option value = "1">Striker</option>
            <option value = "2">Midfielder</option>
            <option value = "3">Defender</option>
            <option value = "4">Goalie</option>
          </select> <br/>
          <ClubSelector docId = 'club' label = 'Team'/>
          <label>Active: </label>
        <input type = "checkbox" id = "active"/> <br/>
        <input type = "submit" value = "Add"/>
      </form>
    </div>
  )
}

export default AddPlayer

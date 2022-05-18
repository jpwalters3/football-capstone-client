import React from 'react'
import Header from '../Header'
import ClubSelector from '../ClubSelector'
import { PostPlayer } from '../../api/Player'
import '../../styles/Form.css'

const AddPlayer = () => {
  function FormSubmit(e){

    e.preventDefault();
    
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
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id = "new-player">
        <form onSubmit={FormSubmit}>
            <div class="form-group mb-6">
              <label>First Name: </label>
              <input type = "text" id = "firstName" class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
              <label>Last Name: </label>
              <input type = "text" id = "lastName" class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
              <label>Date of Birth: </label>
              <input type = "date" id = "bday" class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
            <label>Position: </label>
              <select id = "position" class ="form-controll border border-solid border-gray-300">
                <option value = "1">Striker</option>
                <option value = "2">Midfielder</option>
                <option value = "3">Defender</option>
                <option value = "4">Goalie</option>
              </select> <br/>
            </div>
            <div class="form-group mb-6">
              <ClubSelector docId = 'club' label = 'Team'/>
            </div>
            <div class="form-group mb-6">
              <label>Active: </label>
              <input type = "checkbox" id = "active"/> <br/>
            </div>
            <button type="submit" class="
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Add</button>

        </form>
      </div>
      <br/>
    </div>
  )
}

export default AddPlayer

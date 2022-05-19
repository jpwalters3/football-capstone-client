import React from 'react'
import ClubSelector from '../ClubSelector'
import { useState, useEffect } from 'react'
import { EditPlayer } from '../../api/Player'
import '../../styles/Form.css'
import { TokenContext } from '../../App';

const EditPlayerForm = ({player}) => {
    const [token, setToken] = React.useContext(TokenContext);

    useEffect(()=>{
      setFirstName(player.firstName);
      setLastName(player.lastName);
      setDob(player.dateOfBirth);
      setIsActive(player.IsActive);
      document.getElementById('isactive').checked = isActive;
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
      EditPlayer(player,token);
    }


  return (

    <div>
        <h3>Edit {player.firstName + " " + player.lastName}</h3>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id = 'update-player'>
          <form onSubmit = {submitHandler}>
            <div class="form-group mb-6">
              <label>First Name: </label>
              <input type = "text" id = "first-name" value = {firstName}
              onChange = {(e) => setFirstName(e.target.value)}
              class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
              <label>Last Name: </label>
              <input type = "text" id = "last-name" value = {lastName}
              onChange = {(e) => setLastName(e.target.value)}
              class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
              <label>Date of Birth: </label>
              <input type = "date" id = "bday" value = {dob.substring(0,10)}
              onChange = {(e)=> setDob(e.target.value)}
              class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
              <label>Active </label>
              <input type = "checkbox" id = "isactive"
              onChange = {(e)=> setIsActive(e.target.checked)} /> <br/>
            </div>
            <ClubSelector label = "Club" docId = "club"/> <br/>
            <div class="form-group mb-6">
              <label>Position: </label>
              <select id = "position" value = {position}
              onChange = {(e) => setPosition(e.target.checked)}
              class ="form-controll border border-solid border-gray-300">
                <option value = {1}>Striker</option>
                <option value = {2}>Midfielder</option>
                <option value = {3}>Defender</option>
                <option value = {4}>Goalie</option>
              </select>
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
              ease-in-out">Update</button>
          </form>
        </div>
    </div>
  )
}

export default EditPlayerForm

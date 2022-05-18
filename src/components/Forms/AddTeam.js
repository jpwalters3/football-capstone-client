import React from 'react'
import { useState } from 'react'
import { PostTeam } from '../../api/Club'
import '../../styles/Form.css'
const AddTeam = () => {

  function submitHandler(e){
    e.preventDefault();
    const team = {
      name: document.getElementById('name').value,
      foundingDate: document.getElementById('founding-date').value,
      city: document.getElementById('city').value
    };
    PostTeam(team);
  }
  return (
    <div>
        <p>STRETCH: user image upload</p>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id = "new-club">
        <form onSubmit = {submitHandler}>
          <div class="form-group mb-6">
            <label>Name: </label>
            <input type = "text" id = "name" class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
            <label>Founding Date: </label>
            <input type = "date" id = "founding-date" class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
            <label>City: </label>
            <input type = "text" id ="city" class ="form-controll border border-solid border-gray-300"/> <br/>
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

export default AddTeam

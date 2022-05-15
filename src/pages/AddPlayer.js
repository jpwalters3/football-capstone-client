import React from 'react'
import Header from '../components/Header'

const AddPlayer = () => {
  return (
    <div>
      <Header/>
      <h3>Add a New Player</h3>
      <form>
          <label>First Name: </label>
          <input type = "text" /> <br/>
          <label>Last Name: </label>
          <input type = "text" /> <br/>
          <label>Date of Birth: </label>
          <input type = "date" /> <br/>
          <label>Position: </label>
          <select id = "position">
            <option value = "1">Striker</option>
            <option value = "2">Midfielder</option>
            <option value = "3">Defender</option>
            <option value = "4">Goalie</option>
          </select> <br/>
          <label>Team: </label>
          <select id ="team">
            <option value = "1">Chelsea</option>
            <option value = "2">Manchester</option>
          </select> <br/>
          <label>Active: </label>
        <input type = "checkbox"/> <br/>
        <input type = "submit" value = "Add"/>
      </form>
    </div>
  )
}

export default AddPlayer

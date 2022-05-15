import React from 'react'
import Header from '../components/Header'
import ClubSelector from '../components/ClubSelector'

const AddPlayer = () => {
  return (
    <div>
      <Header/>
      <h3>Add a New Player</h3>
      <p>TODO: POST fetch request</p>
      <p>TODO: GET fetch request teams</p>
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
          <ClubSelector />
          <label>Active: </label>
        <input type = "checkbox"/> <br/>
        <input type = "submit" value = "Add"/>
      </form>
    </div>
  )
}

export default AddPlayer

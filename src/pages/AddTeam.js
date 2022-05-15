import React from 'react'
import Header from '../components/Header'

const AddTeam = () => {
  return (
    <div>
        <Header/>
        <p>TODO: POST fetch request</p>
        <p>TODO: other input fields</p>
        <p>STRETCH: add team logo</p>
      <form>
          <label>Name: </label>
          <input type = "text" /> <br/>
          <input type = "submit" value = "Add Team" />
      </form>
    </div>
  )
}

export default AddTeam

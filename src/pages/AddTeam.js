import React from 'react'
import Header from '../components/Header'

const AddTeam = () => {
  return (
    <div>
        <Header/>
      <form>
          <label>Name: </label>
          <input type = "text" /> <br/>
          <input type = "submit" value = "Add Team" />
      </form>
    </div>
  )
}

export default AddTeam

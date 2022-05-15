import React from 'react'
import Header from '../components/Header'

const AddGame = () => {
  return (
    <div>
      <Header />
      <h3>Add A Game</h3>
      <p>TODO: POST fetch request</p>
      <p>TODO: Return on submit?</p>

      <form>
        <label>Home Team: </label>
        <select id = "home-team">
          <option value = "1">Chelsea</option>
          <option value = "2">Manchester</option>
        </select><br/>
        <label>Away Team: </label>
        <select id = "away-team">
          <option value = "1">Chelsea</option>
          <option value = "2">Manchester</option>
        </select> <br/>
        <label>Date: </label>
        <input type = "date"/> <br/>
      </form>
    </div>
  )
}

export default AddGame

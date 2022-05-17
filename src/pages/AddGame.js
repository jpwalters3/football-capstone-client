import React from 'react'
import Header from '../components/Header'
import { PostGame } from '../api/PostGame'
import ClubSelector from '../components/ClubSelector'

const AddGame = () => {
  function FormSubmit(e){
  
    e.preventDefault();

    const game = {
      matchDate: document.getElementById('date'),
      numberOfAttendees: 0,
      homeScore: document.getElementById('home-score'),
      awayScore: document.getElementById('away-score'),
      homeClubId: document.getElementById('home-team'),
      visitingClubId: document.getElementById('away-team'),
      seasonId: 4
    }
    const init = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(game)
    }

    fetch("http://localhost:5101/api/match", init)
        .then(response => {
            alert('hello')
            if(response.status !== 201){
                alert ("Error")
                return Promise.reject(response.status)
            }
            alert(response.json());
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new match " + json.playerId);
        })
  }
  return (
    <div>
      <Header />
      <h3>Add A Game</h3>
      <p>TODO: Return on submit?</p>

      <form onSubmit={FormSubmit}>
        <ClubSelector docId = 'home-team' label = 'Home Team'/>
        <ClubSelector docId = 'away-team' label = 'Away Team'/>
        <label>Date: </label>
        <input type = "date"/> <br/>
        <label>SCORE</label><br/>
        <label>Home: </label>
        <input type = 'number' id = 'home-score'/> <br/>
        <label>Away: </label>
        <input type = 'number' id = 'away-score' />
        <input type = 'submit' value = 'Add' />
      </form>
    </div>
  )
}

export default AddGame

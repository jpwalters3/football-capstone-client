import React from 'react'
import Header from '../../components/Header'
import { PostGame } from '../../api/Match'
import ClubSelector from '../../components/ClubSelector'

const AddGame = () => {

  function FormSubmit(e){
    
    e.preventDefault();

    const game = {
      matchDate: document.getElementById('match-date').value,
      numberOfAttendees: 0,
      homeScore: document.getElementById('home-score').value,
      awayScore: document.getElementById('away-score').value,
      homeClubId: document.getElementById('home-team').value,
      visitingClubId: document.getElementById('away-team').value,
      seasonId: 4
    }
    PostGame(game);
  }
  return (
    <div>
      <Header />
      <h3>Add A Game</h3>

      <form onSubmit={FormSubmit}>
        <ClubSelector docId = 'home-team' label = 'Home Team'/>
        <ClubSelector docId = 'away-team' label = 'Away Team'/>
        <label>Date: </label>
        <input type = "date" id = "match-date"/> <br/>
        <label>SCORE</label><br/>
        <label>Home: </label>
        <input type = 'number' id = 'home-score'/> <br/>
        <label>Away: </label>
        <input type = 'number' id = 'away-score' /> <br/>
        <input type = 'submit' value = 'Add' />
      </form>
    </div>
  )
}

export default AddGame

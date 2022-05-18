import React from 'react'
import Header from '../../components/Header'
import { PostGame } from '../../api/Match'
import ClubSelector from '../../components/ClubSelector'
import '../../styles/Form.css'
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
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id = "new-match">
        <form onSubmit={FormSubmit}>
          <div class="form-group mb-6">
            <ClubSelector docId = 'home-team' label = 'Home Team'/>
          </div>
          <div class="form-group mb-6">
            <ClubSelector docId = 'away-team' label = 'Away Team'/>
          </div>
          <div class="form-group mb-6">
            <label>Date: </label>
            <input type = "date" id = "match-date" class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <label>SCORE</label><br/>
          <div class="form-group mb-6">
          <label>Home: </label>
          <input type = 'number' id = 'home-score' class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
          <label>Away: </label>
          <input type = 'number' id = 'away-score' class ="form-controll border border-solid border-gray-300"/> <br/>
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
    </div>
  )
}

export default AddGame

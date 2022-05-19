import React from 'react'
import { PostGame } from '../../api/Match'
import ClubSelector from '../ClubSelector'
import '../../styles/Form.css'
import { TokenContext } from '../../App';
const AddGame = () => {

  const [token, setToken] = React.useContext(TokenContext);

  const today = new Date();
  const maxDate = today.getFullYear() + '/' + String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0');

  function FormSubmit(e){
    
    e.preventDefault();

    const game = {
      matchDate: document.getElementById('match-date').value,
      numberOfAttendees: 0,
      homeScore: document.getElementById('home-score').value,
      awayScore: document.getElementById('away-score').value,
      homeClubId: document.getElementById('home-team').value,
      visitingClubId: document.getElementById('away-team').value,
      seasonId: 1
    }
    PostGame(game,token);
  }
  return (
    <div>
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
            <input type = "date" id = "match-date"
            class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <label>SCORE</label><br/>
          <div class="form-group mb-6">
          <label>Home: </label>
          <input type = 'number' id = 'home-score' min = '0' max = '100'
          class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
          <label>Away: </label>
          <input type = 'number' id = 'away-score' min = '0' max = '100'
          class ="form-controll border border-solid border-gray-300"/> <br/>
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

export default AddGame

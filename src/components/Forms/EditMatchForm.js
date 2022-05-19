import React from 'react'
import { useEffect, useState } from 'react'
import ClubSelector from '../ClubSelector';
import { EditMatch } from '../../api/Match';
import "../../styles/Form.css"
import { TokenContext } from '../../App';

const EditMatchForm = ({match}) => {

    const [token, setToken] = React.useContext(TokenContext);

    function submitHandler(e){
        e.preventDefault();
        match.homeClubId = document.getElementById('home-team').value;
        match.visitingClubId = document.getElementById('away-team').value;
        match.matchDate = matchDate;
        match.numberOfAttendees = attendence;
        match.seasonId = 4;
        match.homeScore = homeScore;
        match.awayScore = awayScore;
        EditMatch(match,token)
    }

    const [homeTeam, setHomeTeam] = useState(match.homeClubId);
    const [awayTeam, setAwayTeam] = useState(match.visitingClubId);
    const [matchDate, setMatchDate] = useState(match.matchDate);
    const [attendence, setAttendence] = useState(match.numberOfAttendees);
    const [season, setSeason] = useState(match.seasonId);
    const [homeScore, setHomeScore] = useState(match.homeScore);
    const [awayScore, setAwayScore] = useState(match.awayScore);

    useEffect(()=>{
        setHomeTeam(match.homeClubId);
        setAwayTeam(match.visitingClubId);
        setMatchDate(match.matchDate);
        setAttendence(match.numberOfAttendees);
        setSeason(match.seasonId);
        setHomeScore(match.homeScore);
        setAwayScore(match.awayScore);
    }, [match])

  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id = "update-match">
        <form onSubmit = {submitHandler}>
            <ClubSelector docId = 'home-team' label = 'Home Team'/>
            <ClubSelector docId = 'away-team' label = 'Away Team'/>
            <div class="form-group mb-6">
                <label>Date: </label>
                <input type = "date" id = "match-date" value = {matchDate.substring(0,10)}
                onChange = {(e)=>setMatchDate(e.target.value)}
                class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <label>Score</label><br/>
            <div class="form-group mb-6">
                <label>Home: </label>
                <input type = 'number' id = 'home-score' value = {homeScore} min = '0' max = '100'
                onChange = {(e)=>setHomeScore(e.target.value)}
                class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
                <label>Away: </label>
                <input type = 'number' id = 'away-score' value = {awayScore} min = '0' max = '100'
                onChange = {(e)=>setAwayScore(e.target.value)}
                class ="form-controll border border-solid border-gray-300"/> <br/>
            </div>
            <div class="form-group mb-6">
                <label>Attendence: </label>
                <input type = 'number' id = 'attendence' value = {attendence} min = '0' max = '99999999999'
                onChange = {(e)=>setAttendence(e.target.value)}
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
              ease-in-out">Update</button>
        </form>
    </div>
  )
}

export default EditMatchForm

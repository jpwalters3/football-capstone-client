import React from 'react'
import { useEffect, useState } from 'react'
import ClubSelector from '../ClubSelector';
import { EditMatch } from '../../api/Match';

const EditMatchForm = ({match}) => {

    function submitHandler(e){
        e.preventDefault();
        match.homeClubId = document.getElementById('home-team').value;
        match.visitingClubId = document.getElementById('away-team').value;
        match.matchDate = matchDate;
        match.numberOfAttendees = attendence;
        match.seasonId = 4;
        match.homeScore = homeScore;
        match.awayScore = awayScore;
        EditMatch(match)
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
    <form onSubmit = {submitHandler}>
        <ClubSelector docId = 'home-team' label = 'Home Team'/>
        <ClubSelector docId = 'away-team' label = 'Away Team'/>
        <label>Date: </label>
        <input type = "date" id = "match-date" value = {matchDate.substring(0,10)} onChange = {(e)=>setMatchDate(e.target.value)}/> <br/>
        <label>Score</label><br/>
        <label>Home: </label>
        <input type = 'number' id = 'home-score' value = {homeScore} onChange = {(e)=>setHomeScore(e.target.value)}/> <br/>
        <label>Away: </label>
        <input type = 'number' id = 'away-score' value = {awayScore} onChange = {(e)=>setAwayScore(e.target.value)}/> <br/>
        <label>Attendence: </label>
        <input type = 'number' id = 'attendence' value = {attendence} onChange = {(e)=>setAttendence(e.target.value)}/> <br/>
        <input type = 'submit' value = 'update' />
    </form>
  )
}

export default EditMatchForm

import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import { GetSeasonRecords } from '../../api/TopStats'
import SeasonDisplay from '../../components/GuestDisplays/SeasonDisplay'

const Statistics = () => {
  const [seasons, setSeasons] = useState([{}]);
    useEffect(() =>{
        GetSeasonRecords(setSeasons)
    }, [])
  return (
    <div>
        <Header />
        <h1 className = "text-center text-xl font-serif text-fuchshia-650">Season Statistics Table</h1>
      <p>TODO: get request that calls the stored proceedure for the top ten players in the selected statistical category</p>
      <p>TODO: display response body</p>
      <select>
        <option value = "1">Goals</option>
        <option value = "2">Assists</option>
        <option value = "3">Clean Sheets</option>
      </select>
      <table id = "season-records">
        <tbody>
            <tr>
                <th>Year</th><th>Entry</th>
            </tr>
            {seasons.map(year => <SeasonDisplay season = {year}/>)}
        </tbody>
    </table>
    </div>
  )
}

export default Statistics

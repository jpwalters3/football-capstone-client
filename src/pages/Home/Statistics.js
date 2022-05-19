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
    <div class = "md-32">
        <Header />
        <h1 className = "text-center text-xl font-serif text-fuchshia-650">Season Statistics Table</h1>
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

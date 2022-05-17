import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import SeasonDisplay from '../components/SeasonDisplay'
import { GetSeasonRecords } from '../api/GetSeasonRecords'

const Statistics = () => {
  const [seasons, setSeasons] = useState([{}]);
    useEffect(() =>{
        GetSeasonRecords(setSeasons)
    }, [])
  return (
    <div>
        <Header />
        <table id = "season-records">
        <tbody>
            <tr>
                <th></th><th>year</th><th>isActive</th><th>Top Scorer</th><th>Top Assists</th><th>Most Clean Sheets</th>
            </tr>
            {seasons.map(year => <SeasonDisplay season = {year}/>)}
        </tbody>
    </table>
      <h3>Statistics page</h3>
      <p>TODO: drop down menu of all statistical categories</p>
      <p>TODO: get request that calls the stored proceedure for the top ten players in the selected statistical category</p>
      <p>TODO: display response body</p>
    </div>
  )
}

export default Statistics

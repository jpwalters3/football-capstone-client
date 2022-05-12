import React from 'react'
import { useState } from 'react'
import DisplayElement from './DisplayElement'
import Roster from './Roster'
import ShowAllTeams from './ShowAllTeams'
import ShowAllGames from './ShowAllGames'

const Navbar = () => {
    const [display, setDisplay] = useState("players");
  return (
    <div>
        <div id = "display-bar">
            <DisplayElement Name = "Players" onShow = {()=>setDisplay("players")}/>
            <DisplayElement Name = "Teams" onShow = {()=>setDisplay("teams")} />
            <DisplayElement Name = "Games" onShow = {()=>setDisplay("games")} />
        </div>
        {(display === "players") && <Roster />}
        {(display === "teams") && <ShowAllTeams />}
        {(display === "games") && <ShowAllGames />}
    </div>
  )
}

export default Navbar
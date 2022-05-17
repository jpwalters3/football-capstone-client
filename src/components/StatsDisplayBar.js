import React from 'react'
import { useState } from 'react'
import DisplayElement from './DisplayElement'
import ViewAllPlayers from './ViewAllPlayers'
import ShowAllTeams from './ShowAllTeams'
import ShowAllGames from './ShowAllGames'

const Navbar = () => {
    const [display, setDisplay] = useState("players");
  return (
    <div>
        <div id = "display-bar">
            <DisplayElement Name = "Top Scorer" onShow = {()=>setDisplay("players")}/>
            <DisplayElement Name = "Top Assists" onShow = {()=>setDisplay("teams")} />
            <DisplayElement Name = "Most Clean Sheets" onShow = {()=>setDisplay("games")} />
        </div>
        {(display === "players") && <ViewAllPlayers />}
        {(display === "teams") && <ShowAllTeams />}
        {(display === "games") && <ShowAllGames />}
    </div>
  )
}

export default Navbar
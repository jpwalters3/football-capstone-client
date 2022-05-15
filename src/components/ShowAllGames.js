import React from 'react'
import { Link } from 'react-router-dom'

const ShowAllGames = () => {
  return (
    <div>
      <Link to = "/AddGame"><button>Add Game</button></Link>
      <h3>Show All Games</h3>
      <p>TODO: add GET request for all games</p>
      <p>TODO: display game data</p>
      <p>TODO: navigation for ADD, DELETE, UPDATE</p>
    </div>
  )
}

export default ShowAllGames

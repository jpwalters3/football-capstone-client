import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetAllGames } from '../api/GetAllGames';
import AdminMatchDisplay from './AdminMatchDisplay';

const ShowAllGames = () => {
    const [matches, setMatches] = useState([{}]);
    useEffect(()=>{
        GetAllGames(setMatches);
    }, [])
  return (
    <div>
      <Link to = '/AddGame'><button>Add New Match</button></Link>
      <table>
          <tbody>
              {matches.map( (m) => <AdminMatchDisplay match = {m}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ShowAllGames

import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetAllGames } from '../../api/Match';
import AdminMatchDisplay from './AdminMatchDisplay';
import {PlusIcon} from '@heroicons/react/solid'

const ShowAllGames = () => {
    const [matches, setMatches] = useState([{}]);
    useEffect(()=>{
        GetAllGames(setMatches);
    }, [])
  return (
    <div>
      <Link to = '/Admin/AddGame'><PlusIcon className={"inline h-10 w-10 text-purple-500"}/></Link>
      <table>
          <tbody>
              {matches.map( (m) => <AdminMatchDisplay match = {m}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ShowAllGames

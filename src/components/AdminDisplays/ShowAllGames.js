import React from 'react'
import { useState, useEffect } from 'react'
import { GetAllGames } from '../../api/Match';
import AdminMatchDisplay from './AdminMatchDisplay';
import {PlusIcon} from '@heroicons/react/solid'
import AddGame from '../Forms/AddGame'

const ShowAllGames = () => {
    const [matches, setMatches] = 
      useState([{
        matchId: 1,
        matchDate: '1970-01-01'
      }]);
    const [show, setShow] = useState(false)
    useEffect(()=>{
        GetAllGames(setMatches);
    }, [matches])
    
    function addClickHandler(){
      setShow(!show);
    }

  return (
    <div>
      <br/>
      <button onClick = {addClickHandler}
      class="bg-indigo-500 
      hover:bg-indigo-700 
      text-white 
      font-bold 
      py-1 
      px-2
      rounded-full">
        Add Game
      </button>
        {show && <AddGame />}
      <table class="w-11/12 text-sm text-left text-gray-500 dark:text-gray-400 ml-20">
          <tbody>
            <tr>
              <th>ID</th><th>Date</th><th>Home Club</th><th>Home Score</th><th>Away Score</th><th>Away Club</th><th>Season</th>
            </tr>
              {matches.map( (m) => <AdminMatchDisplay match = {m}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ShowAllGames

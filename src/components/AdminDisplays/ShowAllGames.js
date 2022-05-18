import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <div onClick = {addClickHandler}>
        <PlusIcon className={"inline h-10 w-10 text-purple-500"}/>
      </div>
        {show && <AddGame />}
      <table>
          <tbody>
          <tr>
              <th>Id</th><th>Date</th><th>Home Score</th><th>Away Score</th><th>Home Id</th><th>Away Id</th><th>Season Id</th>
          </tr>
              {matches.map( (m) => <AdminMatchDisplay match = {m}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ShowAllGames

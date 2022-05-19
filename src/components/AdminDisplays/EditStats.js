import React from 'react'
import { useState, useEffect } from 'react'
import { EditPerformance } from '../../api/Performance'
import { TokenContext } from '../../App';



const EditStats = ({performance, toggle}) => {
    const [token, setToken] = React.useContext(TokenContext);

    useEffect(()=>{
        document.getElementById('sot').value = performance.shotsOnTarget
        document.getElementById('s').value = performance.shots
        document.getElementById('g').value = performance.goals
        document.getElementById('a').value = performance.assists
        document.getElementById('cp').value = performance.passesCompleted
        document.getElementById('p').value = performance.passes
        document.getElementById('sd').value = performance.dribblesSucceeded
        document.getElementById('d').value = performance.dribbles
        document.getElementById('st').value = performance.tacklesSucceeded
        document.getElementById('t').value = performance.tackles
        document.getElementById('v').value = performance.saves
    },[])

    function cancelClickHandler(){
        toggle(false);
    }

    function updateClickHandler(){
        performance.shotsOnTarget = document.getElementById('sot').value
        performance.shots = document.getElementById('s').value
        performance.goals = document.getElementById('g').value
        performance.assists = document.getElementById('a').value
        performance.passesCompleted = document.getElementById('cp').value
        performance.passes = document.getElementById('p').value
        performance.dribblesSucceeded = document.getElementById('sd').value
        performance.dribbles = document.getElementById('d').value
        performance.tacklesSucceeded = document.getElementById('st').value
        performance.tackles = document.getElementById('t').value
        performance.saves = document.getElementById('v').value

        if(performance.shotsOnTarget > performance.shots){
            alert("Warning: Shots on target cannot exceed total shots");
            return;
        }

        if(performance.passesCompleted > performance.passes){
            alert("Warning: Completed Passes cannot exceed total passes")
            return;
        }

        if (performance.dribblesSucceeded > performance.dribbles){
            alert("Warning: Successful dribbles cannot exceed total dribbles")
            return;
        }

        if(performance.tacklesSucceeded > performance.tackles){
            alert("Warning: Successful tackles cannot exceed total tackles")
            return;
        }
        
        EditPerformance(performance, token)
        toggle(false)
    }

  return (
    <table>
        <tbody className = "admin-stats-table">
            <tr>{"Shots On Target:  "}
                <input type = "number" id = 'sot'
                size = "3" min = "0" max = "100" 
                class = "rounded-md border-2 border-black"/> {" / "} 
                <input type = "number" id = 's' 
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/></tr>
            <tr>{"Goals:  "}
                <input type = "number" id='g'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/>
            </tr>
            <tr>{"Assists:  "}
                <input type = "number" id='a'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/>
            </tr>
            <tr>{"Completed Passes:  "}
                <input type = "number" id='cp'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/> {" / "} 
                <input type = "number" id='p'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/>
            </tr>
            <tr>{"Successful Dribbles:  "}
                <input type = "number" id = 'sd' 
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/> {" / "} 
                <input type = "number" id='d'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/> 
            </tr>
            <tr>{"Successful Tackles:  "}
                <input type = "number" id = 'st'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/> {" / "} 
                <input type = "number" id = 't'
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/>
            </tr>
            <tr>{"Saves:  "}
                <input type = "number" id="v"
                size = "3" min = "0" max = "100"
                class = "rounded-md border-2 border-black"/>
            </tr>
            {performance.cleanSheet ? <tr>Clean Sheet: yes</tr> : <tr>Clean Sheet: no</tr>}
            <tr>
                <button onClick = {updateClickHandler}
                class="bg-indigo-500 
                hover:bg-indigo-700 
                text-white 
                font-bold 
                py-1 
                px-2
                rounded-full">
                    Update
                </button>
                <button onClick = {cancelClickHandler}
                class="bg-indigo-500 
                hover:bg-indigo-700 
                text-white 
                font-bold 
                py-1 
                px-2
                rounded-full">
                    Cancel
                </button>
            </tr>
        </tbody>
    </table>
  )
}

export default EditStats

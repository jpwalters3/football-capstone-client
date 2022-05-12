import React from 'react'

const DisplayElement = ({Name, onShow}) => {
  return (
    <div className = "display-element">
        <button className = "display-button" onClick = {onShow}>{Name}</button>
    </div>
  )
}

export default DisplayElement
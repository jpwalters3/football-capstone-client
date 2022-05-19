import React from 'react'

const DisplayElement = ({Name, onShow}) => {
  return (
    <div className = "display-element">
        <button class = "bg-emerald-500 hover:bg-emerald-700 text-white font-sans py-4 px-8 border border-emerald-900 rounded" onClick = {onShow}>{Name}</button>
    </div>
  )
}

export default DisplayElement
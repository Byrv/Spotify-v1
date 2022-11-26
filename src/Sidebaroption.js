import React from 'react'
import "./sidebaroption.css"

function Sidebaroption({tittle,Icon}) {
  return (
    <div className='sidebaroption'>
      {Icon &&<Icon className="sidebaroption_icon"/>}
      {Icon ? <h4>{tittle}</h4>:<p>{tittle}</p>}
    </div>
  )
}

export default Sidebaroption
import React from 'react'
import "./InfoCard.css"

function InformationCard({data}) {
  return (
    <div className='infoCard'>
      <p>{data.key}</p>
      <h4>{data.value}</h4>
    </div>
  )
}

export default InformationCard
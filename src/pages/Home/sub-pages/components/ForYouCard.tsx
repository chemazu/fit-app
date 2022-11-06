import React from 'react'
import './ForYouCard.scss'
import squat from "../../../../assets/img/bench.svg"

 

export default function ForYouCard() {
  return (
    <div className="for-you-card">
        <img src={squat} alt="squat" />
        <div className="content">
            <p>Try a guided run</p>
            <h3>First Fartlek Run</h3>
            <p>19mins. samp</p>
        </div>
    </div>
  )
}
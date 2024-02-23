import React from 'react'
import './trendCard.css'



function TrendCard({slide}) {

  
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={require(`../images/movies/${slide.previewImg}`)} />
        <a href='#'>
            Add to a calendar <ion-icon name='calendar-outline'></ion-icon>
        </a>      
    </div>
  )
}

export default TrendCard


import React from 'react'
import Button from './Button'
import './movieContent.css'
const img = 'transformer-title.png'




function MovieContent({movie}) {

  return (
    
      <div className={`content ${movie.active ? 'active' : undefined}`}>
            <img src={require(`../images/movies/${movie.titleImg}`)} alt='Movie Title' className='movie-title'/>
            <h4>
                <span>{movie.year}</span>
                <span>
                    <i>{movie.ageLimit}</i>
                </span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>
            <p>{movie.description}</p>
            <div className='button'>
                <Button
                icon={<ion-icon name="bookmark-outline"></ion-icon>}
                name='Book'
                color='#ff3700'
                bgColor='#ffffff'                
                />
                <Button 
                icon={<ion-icon name='add-outline'></ion-icon>}
                name='My List'
                />
            </div>

        </div>
    
  )
}

export default MovieContent

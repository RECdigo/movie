import React, {useState, useEffect} from 'react'
import MovieContent from '../components/MovieContent'
import MovieData from '../components/MovieData'
import MovieSwiper from '../components/MovieSwiper'
import PlayBtn from '../components/PlayBtn'
import './banner.css'
import datas from '../data/movieData.json'


function Banner() {
    const [movies, setMovies] = useState(datas)  

   const handleSlideChange = id => {
    const newMovies = movies.map(movie => {
        movie.active = false
        if(movie._id===id){
            movie.active = true
        }
        return movie
    })
    setMovies(newMovies)
   } 

  return (
    <div className='banner'>
        {
            movies && movies.length>0 && movies.map(movie => (
                <div key={movie._id} className='movie'>
            <img src={require(`../images/movies/${movie.bgImg}`)} alt='Background Image' className={`bgImg ${movie.active ? 'active' : 'undefined'}`}/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6  col-sm-12'>
                        <MovieContent movie={movie}/>
                    </div>
                    
                    <div className='col-lg-6  col-sm-12'> 
                        <MovieData movie={movie} />
                        <PlayBtn movie={movie} />
                    </div>                     
                </div>
            </div>            
        </div>

            ))
        }        
        
        { movies && movies.length > 0 &&  <MovieSwiper slides={movies} slideChange={handleSlideChange}/> }      
    </div>
    
  )
}

export default Banner

import React, {useState, useRef } from 'react'
import Modal from './Modal'
import './playBtn.css'

function PlayBtn({movie}) {
  const [modal, setModal] = useState(false)

  const iframeRef = useRef(null)

  const toggleModal = () => {
    setModal(!modal)
    

  }

  const closeModal = () => {
    setModal(false);

    const iframe = document.querySelector('.movieModal iframe');

    if (iframe) {
      iframe.parentNode.removeChild(iframe);
    }
    
  };

 

  return (
   <>
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : 'undefined'}`}>
        <a href='#' className='playBtn' onClick={toggleModal}>
            <ion-icon name='play-outline'></ion-icon>
        </a>
        <p>Whatch Trailer</p>                        
    </div>
    {movie.active && <Modal movie={movie} status={modal} toggleModal={closeModal}/>}
   </>
  )
}

export default PlayBtn

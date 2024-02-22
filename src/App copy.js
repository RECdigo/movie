import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import './App.css'
import React, { useEffect, useState } from 'react'
import Header from './pages/Header.jsx'
import Banner from './pages/Banner.jsx'
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTop from './components/BackToTop';
import NavListItem from './components/NavListItem';




function App() {
  const [scroll, setScroll] = useState(0)
  const [toggleBtn, setToggleBtn] = useState(true)
  
  

  useEffect (() => {

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)      
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }

  },[scroll])

  const toggleBtnClick = (() => {

    setToggleBtn(false) 

  })

  

  return (
    <>

    
    <>
    

      <div className='all'>
          
        <Header scroll={scroll} toggle={toggleBtnClick}/>
        <Banner/>
        <Main />
        <Footer />
        <BackToTop scroll={scroll}/>
      
      </div> 
    

    
    </>
    
    
   
    
    
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'
import './App.css'
import React, { useEffect, useState } from 'react'
import Header from './pages/Header.jsx'
import Banner from './pages/Banner.jsx'
import Main from './pages/Main'
import Footer from './pages/Footer'
import BackToTop from './components/BackToTop'
import NavListItem from './components/NavListItem'
import navListData from './data/navListData'
import Button from './components/Button'


function App() {
  const [scroll, setScroll] = useState(0)
  const [toggleBtn, setToggleBtn] = useState(true)
  const [showOverlay, setShowOverlay] = useState(false)
  const [navList, setNavList] = useState(navListData)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      })
    }
  }, [scroll])

  const toggleBtnClick = () => {
    setToggleBtn(false)
    setShowOverlay(true) // Show the overlay when the button is clicked

  }

  const closeOverlay = () => {
    setShowOverlay(false) // Hide the overlay when clicked outside
  }

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false 
      if (nav._id === id) nav.active = true
      return nav
   })
  }
  

  return (
    <>
      <div className="all">
        {!showOverlay && (
          <Header scroll={scroll} toggle={toggleBtnClick} />
        )}
        <Banner />
        <Main />
        <Footer />
        <BackToTop scroll={scroll} />
      </div>

      {/* Conditional rendering for the overlay */}
      {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <button className="close-btn" onClick={closeOverlay}>X</button>
          <div className="overlay-content">
            <ul className='option'>

              {
                  navList.map(nav => (
                      <NavListItem key={nav._id } nav={nav} navOnClick={handleNavOnClick}/>
                  ))
              }
            <Button
                icon={<ion-icon name='log-in-outline'></ion-icon>}
                name='Sign in'
                
            />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

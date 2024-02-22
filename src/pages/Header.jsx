import React, {useState} from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import './header.css'
import Search from '../components/Search'
import Button from '../components/Button'
import App from '../App'



function Header({scroll, toggle}) {

  const [navList, setNavList] = useState(navListData)
  

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false 
      if (nav._id === id) nav.active = true
      return nav
   })
  }

 

  return (
    <header className={`${scroll>50 ? 'scrolled': undefined}`}>
        <a href="/" className='logo'>Cinema</a>

     
        
        <ul className='nav'>

            {
                navList.map(nav => (
                    <NavListItem key={nav._id } nav={nav} navOnClick={handleNavOnClick}/>
                ))
            }
            
        </ul>
        <Search />
        <Button
          icon={<ion-icon name='log-in-outline'></ion-icon>}
          name='Sign in'
          
        />
        <div className='toggleBtn' onClick={toggle}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        


    </header>
  )
}

export default Header

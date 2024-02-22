import React from 'react'
import './footer.css'
import FooterNavItem from '../components/FooterNavItem'

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy'
    ]
    const location = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentun odio',
        'Justo eget',
        'Fermentum iaculis',
    ]
  return (
    <footer id='footer' className='footer'>

        <div className='footer-top'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-5 col-md-12 footer-info'>
                        <a href='/' className='logo d-flex align-items-center'>
                            <span className='cinemaSpan'>CINEMA</span>
                        </a>
                        <p>
                        Cinema is the canvas where dreams are painted with the brushstrokes of light and sound, 
                        creating a masterpiece that transcends time, inviting us to lose ourselves in its beauty 
                        and immerse our souls in the magic of storytelling
                        </p>
                        <div className='social-links mt-3'>
                            <a href='#' className='twitter'>
                                <ion-icon name='logo-twitter'></ion-icon>
                            </a>
                            <a href='#' className='facebook'>
                                <ion-icon name='logo-facebook'></ion-icon>
                            </a>
                            <a href='#' className='instagram'>
                                <ion-icon name='logo-instagram'></ion-icon>
                            </a>
                            <a href='#' className='youtube'>
                                <ion-icon name='logo-youtube'></ion-icon>
                            </a>

                        </div>
                    </div>
                    <div className='col-lg-2 col-6 footer-links'>
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))
                        }
                        </ul>
                    </div>
                    
                    <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br/>
                            City Name, State 123456 <br/>
                            Brazil <br/><br/>
                            <strong>Phone:</strong>+55 19 98203-6719 <br/>
                            <strong>Email:</strong> rodrigo_eccel@yahoo.com.br <br/>                           

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
        <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
                <span>Rodrigo Eccel Technology</span>
            </strong>
            . All Right Reserved
        </div>
        <div className='credits'>
            Designed by <a href='#'>REC Technology</a>
        </div>
        </div>                
    </footer>
  )
}

export default Footer

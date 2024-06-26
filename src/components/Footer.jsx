import React from 'react'
import twitter from '../assets/twitter-logo.png'
import telegram from '../assets/telegram-logo.png'
import logo from '../assets/logo.svg'
import '../css/Footer.css';

const Footer = () => {
  return (
    <section className='footer-bg'>
        <div className='footer-container'>
            <div className='footer-parent'>
                <h2>Follow us on our social media</h2>
                <div className='socials-container'>
                    <a href="https://twitter.com/thesolpluto" target="_blank"><img src={twitter} alt="" /></a>
                    <a href="https://t.me/thesolpluto" target="_blank"><img src={telegram} alt="" /></a>
                </div>
            </div>
        </div>
        <div className='pluto-team'>
              <img src={logo} alt="" />
              <p>Pluto team 2024</p>
        </div>
    </section>
  )
}

export default Footer

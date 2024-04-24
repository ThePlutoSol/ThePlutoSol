import React from 'react'
import pinkSale from '../assets/pinksale-logo.png'
import dexView from '../assets/dexview-logo.png'
import '../css/Partners.css'

const Partners = () => {
  return (
    <div className='partners-bg'>
        <h1>Partners</h1>
        <div className='partners-container'>
            <ul className='partners-item'>
                <li><a href="https://www.pinksale.finance/" target='_blank'><img src={pinkSale} alt="" /></a></li>
                <li><a href="https://www.dexview.com/" target='_blank'><img src={dexView} alt="" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Partners
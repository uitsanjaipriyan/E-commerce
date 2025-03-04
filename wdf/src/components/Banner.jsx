import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
        <div className='banner-container'>
  
        <div className='sale'>
            <p className='o'>Limited time offer</p>
            <h1>Sizzling Summer Sale! </h1>
            <p className='offer'> Flat 50% OFF + Extra Deals </p>
        </div>
        <div>
        <img src="/boy.png" alt="banner" />
        <div className='round'></div>
        <button className="shop">shop now!</button>
        </div>
        </div>
    </div>
  )
}

export default Banner
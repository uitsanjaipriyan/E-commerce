import React from 'react'
import './NavigationBar.css'
const NavigationBar = ({viewcart}) => {
  return (
    <div>
         <nav>
            <button>shop➕</button>
            <h1>Luxecart</h1>   
            <li>
            <ul className='nav'>Login</ul>
            <ul className='nav'>Sign Up</ul>
            <ul className='nav'>AboutUs</ul>
            <ul className='viewcart-button'>{viewcart}</ul>
            </li>
         </nav>
    </div>
  )
}

export default NavigationBar

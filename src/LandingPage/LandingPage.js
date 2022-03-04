import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = ({title}) => {
  return (
    <div className="main-page">
      <div className="landing-titles">
        <h1>In The Crate</h1>
        <p>A shopping list for your vinyl addiction. View a list of random artists and their music, see if you like them and save it for later when you go record shopping. That simple. </p>
        <Link className='enter-site' to={`/categorys`}>Enter Site</Link>
      </div>
    </div>
  )
}

export default LandingPage; 
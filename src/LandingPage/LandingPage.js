import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = ({fetchArtists}) => {
  return (
    <div className="main-page">
      <div className="landing-titles">
        <h1 className='landing-page-title'>In The Crate</h1>
        <p className='page-summary'>A discovery for new music artists! This site is powered by the Discogs public api with access to an abundance of artists. It generates a list of new artists for you to discover and expand your musical pallet! </p>
        <Link className='enter-site' to={`/artists`}>Enter Site</Link>
      </div>
    </div>
  )
}

export default LandingPage; 
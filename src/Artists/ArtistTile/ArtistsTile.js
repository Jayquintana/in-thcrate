import React from 'react'
import './ArtistsTile.css'
import { Link } from 'react-router-dom';

const ArtistsTile = ({name, genre, image}) => {
  return (
    <section className='all-artist'>
    <div className="card">
      <div className="cover">
        <img src="https://upload.wikimedia.org/wikipedia/en/3/35/Muse_2nd_law.jpg" alt="cover" />
        <div className="play-icon">
          <p className='logo-info'>Info</p>
        </div>
      </div>
      <div className="card-content">
        <h4>Artist Name</h4>
        <p>Hip Hop</p>
      </div>
    </div>
  </section>
  )
}

export default ArtistsTile; 
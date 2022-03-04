import React from 'react'
import './Artists.css'
import { Link } from 'react-router-dom';
import ArtistsTile from './ArtistTile/ArtistsTile';

const Artists = () => {
  return (
    <div className="artist-page">
      <ArtistsTile />
    </div>
  )
}

export default Artists; 
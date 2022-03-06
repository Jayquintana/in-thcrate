import React from 'react'
import './Artists.css'
import { Link } from 'react-router-dom';
import ArtistsTile from './ArtistTile/ArtistsTile';

const Artists = ({artists}) => {

  const artistCards = artists.map(artist => {
    return (
      <ArtistsTile
        name={artist.name}
        artistImage={artist.images}
        key={artist.id}
        id={artist.id}
      />
    ) 

  })
    
  

  return (
    <div className="artist-page">
      {artistCards}
    </div>
  )
}

export default Artists; 
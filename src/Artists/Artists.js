import React from 'react'
import './Artists.css'
import { Link } from 'react-router-dom';
import ArtistsTile from './ArtistTile/ArtistsTile';
import ArtistNav from './ArtistNav/ArtistNav'

const Artists = ({ artists, grabArtist}) => {

  const artistCards = artists.map(artist => {
    return (
      <ArtistsTile
        name={artist.name}
        artistImage={artist.images}
        key={artist.id}
        id={artist.id}
        grabArtist={grabArtist}
      />
    ) 

  })
    
  

  return (
    <div className="artist-page">
      < ArtistNav />
      {artistCards}
    </div>
  )
}

export default Artists; 
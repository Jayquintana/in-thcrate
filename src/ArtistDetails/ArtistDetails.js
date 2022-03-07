import React from 'react'
import './ArtistDetails.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'



const ArtistDetails = ({artists}) => {
const params = useParams()
  const artist = artists.find(artist => artist.id === Number(params.id))


  return (
    <section className='artist-profile' >
      <Link className='back-to-artists' to={`/artists`}>Back To Artists</Link>
      <div className="container">
        <img src={`${artist.images[0].uri}`} alt="Profile picture" className="artist-img"/>
          <div className="terminal output">
            <span className="purple">{`${artist.name}`}</span>
            <span className="red">-----------------</span>
            <span className="purple about">About:</span> {`${artist.profile}`}
            <span className="purple">Releases</span>: Xubuntu 20.04
          </div>
      </div>
    </section>
  )
}

export default ArtistDetails
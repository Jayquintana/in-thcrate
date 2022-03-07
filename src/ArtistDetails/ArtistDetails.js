import React from 'react'
import './ArtistDetails.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getReleases } from '../api/artistReleases';



const ArtistDetails = ({artists}) => {
const params = useParams()
  const artist = artists.find(artist => artist.id === Number(params.id))

  const [releases, setRelease] = useState([])

  useEffect(() => {
    getArtitRelease()
  }, [])

const getArtitRelease = () => {
  console.log(artist.releases_url);
  getReleases(artist.releases_url).then((data) => {
    console.log(data);
  })
    .catch(error => console.log(error))
}

  return (
    <section className='artist-profile' >
      <Link className='back-to-artists' to={`/artists`}>Back To Artists</Link>
      <div className="container">
        <img src={`${artist.images[0].uri}`} alt="Profile picture" className="artist-img"/>
          <div className="artist-description">
            <span className="purple">{`${artist.name}`}</span>
            <span className="red">-----------------</span>
            <span className="purple about">About:</span> {`${artist.profile}`}
          <span className="purple">Releases</span>: none
          </div>
      </div>
    </section>
  )
}

export default ArtistDetails
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
    setRelease(data.releases)
  })
    .catch(error => console.log(error))
}

const displayReleases = () => {
  let result = releases.map((release) => {
    return (<p className="white">{release.title}<p></p></p> )
  })
  return result
}

  return (
    <section className='artist-profile' >
      <Link className='back-to-artists' to={`/artists`}>Back To Artists</Link>
      <div className="container">
        <img src={`${artist.images[0].uri}`} alt="Profile picture" className="artist-img"/>
          <div className="artist-description">
            <p className="purple">{`${artist.name}`}</p>
            <span className="red">-----------------</span>
            <p className="purple about">About:</p> {`${artist.profile}`}
            <p className="purple releases">Releases: <p className='white'> {releases.length}</p></p> 
            {displayReleases()}
          </div>
      </div>
    </section>
  )
}

export default ArtistDetails
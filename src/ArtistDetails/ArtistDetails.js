import React from 'react'
import './ArtistDetails.css'
import { Link } from 'react-router-dom';


const ArtistDetails = ({name, image, about, id}) => {

  return (
    <div className="container">
      <img src={`${image}`} alt="Profile picture" className="artist-img"/>
        <div className="terminal output">
          <span className="purple">{`${name}`}</span>
          <span className="red">-----------------</span>
          <span className="purple about">About</span> {`${about}`}
          <span className="purple">Releases</span>: Xubuntu 20.04
        </div>
    </div>
  )
}

export default ArtistDetails
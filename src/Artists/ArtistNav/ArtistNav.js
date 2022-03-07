import React from 'react'
import './ArtistNav.css'
import { Link } from 'react-router-dom';


const Nav = ({}) => {

  return (
    <nav>
      <Link className='header-title' to={`/`}>
      <h1 className='nav-title'>In The Crate</h1>
      </Link>
      <Link onClick={() => window.location.reload()} className='enter-site' to={`/artists`}>Generate New Artists</Link>
    </nav>
  )
}

export default Nav
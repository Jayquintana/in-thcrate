import React from 'react'
import logo from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/vinyls.png'
import refresh from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/sync.png'
import './ArtistNav.css'
import { Link } from 'react-router-dom';


const Nav = ({}) => {

  return (
    <nav>
      <Link className='header-title' to={`/`}>
      <h1 >In The Crate</h1>
      </Link>
      <Link onClick={() => window.location.reload()} className='enter-site' to={`/artists`}>Generate New Artists</Link>

    </nav>
  )
}

export default Nav
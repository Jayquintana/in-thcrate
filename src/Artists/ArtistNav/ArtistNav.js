import React from 'react'
import logo from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/vinyls.png'
import refresh from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/sync.png'
import './ArtistNav.css'
import { NavLink } from 'react-router-dom';


const Nav = ({}) => {

  return (
    <nav>
      <NavLink className='header-title' to={`/`}>
      <h1 >In The Crate</h1>
      </NavLink>
      <button onClick={() => window.location.reload()} className="glow-on-hover" type="button">Generate New Artists</button>
    </nav>
  )
}

export default Nav
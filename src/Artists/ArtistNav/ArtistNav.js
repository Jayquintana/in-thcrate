import React from 'react'
import logo from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/vinyls.png'
import refresh from '/Users/jayp/Desktop/turing/mod3/projects/in-the-crate/src/sync.png'
import './ArtistNav.css'
import { NavLink } from 'react-router-dom';


const Nav = ({}) => {

  return (
    <nav>
      <NavLink className='logo-button-link' to={`/`}>
        <button className='logo-button'><img className='logo-img' src={logo} alt='Logo' /></button>
      </NavLink>
      <h1 className='header-title'>In The Crate</h1>
      <button className='refresh-img'  >refresh</button>
      <div className="search">
        <div className="search-container">
          <div className="searchInputWrapper">
            <input className="searchInput" type="text" placeholder='search movies'>
            </input>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
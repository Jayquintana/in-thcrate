import React from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists} from '../api/discogsApi';
import { Route, Routes } from 'react-router-dom';
import Artists from '../Artists/Artists';
import ArtistDetails from '../ArtistDetails/ArtistDetails'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


const App = () =>  {
    const [artists, setArtists] = useState([])

  useEffect(() => {
    getRandomArtist()
  }, []);

  const getRandomArtist = () => {
    let artistAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
    let artistId = artistAmount.map((num) => {
      let randomNumber = Math.random() * (300 - num) + num;
      return Math.round(randomNumber)
    })

    let fetchArtists = artistId.map((id) => {
      return getArtists(id).then((data) => {
        if (data.images.length) {
          return setArtists(arr => [...arr, data])
        } 
        else {
          console.log('no image');
        }
        })
          .catch((error) => {
            console.log(error)
          });
      })
  }

    return (
      <div className="main-section">
        <Routes>
          <Route  exact path='/' element={<LandingPage  />}  />
          <Route exact path='/artists' element={<Artists artists={artists} />}  />
          <Route path='/artists/:id' element={<ArtistDetails artists={artists} />} />  
        </Routes>
      </div>
    )
  }
export default App;

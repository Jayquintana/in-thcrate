import React, {Component} from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists} from '../api/discogsApi';
import { Route, Routes } from 'react-router-dom';
import Artists from '../Artists/Artists';


class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    this.getRandomArtist()
  }


  getRandomArtist() {
    let artistAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
    let artistId = artistAmount.map((num) => {
      let randomNumber = Math.random() * (300 - num) + num;
      return Math.round(randomNumber)
    })

    let fetchArtists = artistId.map((id) => {
      return getArtists(id).then((data) => {
        if (data.images.length) {
          return this.setState(state => state.artists.push(data))
        } else {
          console.log('no image');
        }
      })
        .catch((error) => {
          console.log(error)
        });
    })
    
  }

  

  render() {
    return (
      <div className="main-section">
        <Routes>
          <Route path='/' element={<LandingPage artistIds={this.state.artistIds} fetchArtists={this.fetchArtists} />} exact />
          <Route path='/artists' element={<Artists artists={this.state.artists} />} exact />
        </Routes>
      </div>
    )
  }
}
export default App;

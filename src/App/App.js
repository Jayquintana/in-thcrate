import React, {Component} from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists} from '../api/discogsApi';
import { Route, Routes } from 'react-router-dom';
import Artists from '../Artists/Artists';
import ArtistDetails from '../ArtistDetails/ArtistDetails'
import {useParams} from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      artistId: []
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

  checkCategory = (input) => {
    console.log('hello');
    const findArtist = this.state.artists.find(artist => artist.id === input)
    console.log(findArtist);
    if (findArtist) {
      return (<ArtistDetails />)
    } else {
      console.log('hello');
    }
  }




  render() {
    return (
      <div className="main-section">
        <Routes>
          <Route  exact path='/' element={<LandingPage  />}  />
          <Route exact path='/artists' element={<Artists artists={this.state.artists} />}  />
          {/* <Route  path='/artists/:id' render={({ match }) => {
            const findArtist = this.state.artists.find(artist => artist.id === parseInt(match.params.id))
            this.setState(state => state.artistId.push(findArtist))
          }} element={<ArtistDetails match={this.state.artistId} />}
          /> */}
          {/* <Route path='/artists/:id' render={({props}) => {console.log(props)}} element={<ArtistDetails match={this.props} />} />   */}
        </Routes>
      </div>
    )
  }
}
export default App;

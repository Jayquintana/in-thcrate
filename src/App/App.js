import React, {Component} from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists} from '../api/discogsApi';
import { Route, Routes } from 'react-router-dom';
import Artists from '../Artists/Artists';
import ArtistDetails from '../ArtistDetails/ArtistDetails'

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
          <Route exact path='/artists/:id' render={({ match }) => {
            const findArtist = this.state.artists.find(artist => artist.id === parseInt(match.params.id))
            if (findArtist) {
              return (
                <ArtistDetails name={findArtist.name} image={findArtist.images[0].uri} about={findArtist.p} id={match.params.id} />
              )
            } 
            // else if (findMovie === undefined) {
            //   return (
            //     <LolNotFound />
            //   )
            // }
          }}
          />
        </Routes>
      </div>
    )
  }
}
export default App;

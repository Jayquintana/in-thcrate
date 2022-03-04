import React, {Component} from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists } from '../api/discogsApi';
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
    getArtists().then(data => console.log(data))
  }


  render() {
    return (
      <div className="main-section">
        <Routes>
          <Route path='/' element={ <LandingPage />} exact />
          <Route path='/artists' element={<Artists />} exact />
        </Routes>
      </div>
    )
  }
}
export default App;

import React, {Component} from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import { getArtists } from '../api/discogsApi';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    getArtists().then(data => console.log(data))
    console.log('hello');
  }


  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    )
  }
}
export default App;

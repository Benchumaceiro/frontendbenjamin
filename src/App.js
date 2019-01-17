import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Peliculas from './components/peliculas';
import Films from './components/films';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Films/>
        <Route exact path="/" component={Peliculas} />
      </div>
    );
  }
}

export default App;

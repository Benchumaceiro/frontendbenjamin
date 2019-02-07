import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Films from './components/films';
import People from './components/personajes';
import Home from './Pages/home';
import Starships from './components/vehiculos';
import Planets from './components/planetas';
import Tarjetascrucerosespaciales from './components/tarjetascrucerosespaciales';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />

        <div className= "container">
        <Route path="/" component={Home}/>
        <Route path="/films" component={Films}/>
        <Route path="/personajes" component={People}/>
        <Route path="/vehiculos" component={Starships}/>
        <Route path="/planetas" component={Planets}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import Tarjetasplanetas from './tarjetasplanetas';

  

class Planets extends Component {

 constructor(){
   super();
   this.state = {
     planets: []
   }
 }

 componentDidMount(){
   axios.get('https://swapi.co/api/planets/')
     .then((response) => {
       console.log(response)
       this.setState({
         planets: response.data.results
       })
     }).catch((err) => {
       console.log(err)
     })
 }


 render() {
   const planets = this.state.planets.map((w) => {
     return <Tarjetasplanetas  name={w.name} diameter={w.diameter} population={w.population} climate={w.climate} terrain={w.terrain} surface_water={w.surface_water} /> 
   });
   return (
     <div className= "planets row">
     {planets}
     </div>
   );
 }
 }
export default Planets;


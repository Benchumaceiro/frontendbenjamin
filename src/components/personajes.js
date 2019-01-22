import React, { Component } from 'react';
import axios from 'axios';
import Tarjetaspersonajes from './tarjetaspersonajes';

  

class People extends Component {

 constructor(){
   super();
   this.state = {
     people: []
   }
 }

 componentDidMount(){
   axios.get('https://swapi.co/api/people/')
     .then((response) => {
       console.log(response)
       this.setState({
         people: response.data.results
       })
     }).catch((err) => {
       console.log(err)
     })
 }


 render() {
   const people = this.state.people.map((p) => {
     return <Tarjetaspersonajes  name={p.name} films={p.films} homeworld={p.homeworld} gender={p.gender} birth_year={p.birth_year} height={p.height} /> 
   });
   return (
     <div className= "people row">
     {people}
     </div>
   );
 }
 }
export default People;


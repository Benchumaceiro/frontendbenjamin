import React, { Component } from 'react';
import axios from 'axios';
import Tarjetasvehiculos from './tarjetasvehiculos';

  

class Starships extends Component {

 constructor(){
   super();
   this.state = {
    starships: []
   }
 }

 componentDidMount(){
   axios.get('https://swapi.co/api/starships/')
     .then((response) => {
       console.log(response)
       this.setState({
        starships: response.data.results
       })
     }).catch((err) => {
       console.log(err)
     })
 }


 render() {
   const starships = this.state.starships.map((s) => {
     return <Tarjetasvehiculos  name={s.name} model={s.model} crew={s.crew} starship_class={s.starship_class} passengers={s.passengers}  /> 
   });
   return (
     <div className= "starships row">
     {starships}
     </div>
   );
 }
 }
export default Starships;
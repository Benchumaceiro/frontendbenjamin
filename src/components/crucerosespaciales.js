import React, { Component } from 'react';
import axios from 'axios';
import Tarjeta from './tarjetascrucerosespaciales';

  

class Vehicles extends Component {

 constructor(){
   super();
   this.state = {
     vehicles: []
   }
 }

 componentDidMount(){
   axios.get('http://swapi.co/api/vehicles/')
     .then((response) => {
       console.log(response)
       this.setState({
         vehicles: response.data.results
       })
     }).catch((err) => {
       console.log(err)
     })
 }


 render() {
   const vehicles = this.state.films.map((v) => {
     return <Tarjeta name={v.name} modell={v.model} manufacturer={v.manufacturer} length={v.length} passengers={v.passengers} vehicle_class={v.vehicle_class} /> 
   });
   return (
     <div className= "vehicles row">
     {vehicles}
     </div>
   );
 }
 }
export default Vehicles;


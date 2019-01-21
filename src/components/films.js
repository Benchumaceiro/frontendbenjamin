import React, { Component } from 'react';
import axios from 'axios';
import Tarjeta from './tarjeta';

  

class Films extends Component {

 constructor(){
   super();
   this.state = {
     films: []
   }
 }

 componentDidMount(){
   axios.get('https://swapi.co/api/films/')
     .then((response) => {
       console.log(response)
       this.setState({
         films: response.data.results
       })
     }).catch((err) => {
       console.log(err)
     })
 }


 render() {
   const films = this.state.films.map((f) => {
     return <Tarjeta title={f.title} /> 
   });
   return (
     <div className="films row">
     {films}
     </div>
   );
 }
 }
export default Films;


import React, {Component} from 'react';
const axios = require('axios')


export default class Tareas extends Component {
    constructor(props){
        super(props)
        this.state = {
            tareas: []
        }
       
    }

    componentDidMount(){
        console.log("cargando data de swapi")
        axios.get('https://swapi.co/api/films')
        .then((data) => {
            
            console.log(data)
           
        })
        .catch((err) => {
            console.log(err)
        })
    }


    render(){
       /*  const tareas = this.state.tareas.map((t) => {
            return <li key={t.id}>{t.title + " [" + (t.completed? "Completada": "No Completada") + "]"}</li>
        }) */
        return <div>
    
        </div>
    }
}
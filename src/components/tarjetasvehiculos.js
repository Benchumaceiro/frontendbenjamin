import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

let imagenes = {"Executor" : "/imagenes/executor.jpeg" ,
"Sentinel-class landing craft" : "/imagenes/Sentinel-class.jpg",
"Death Star" : "/imagenes/Death Star.jpeg",
"Millennium Falcon" : "/imagenes/falcon.jpg",
"Y-wing" : "/imagenes/jwing.jpg",
"X-wing" : "/imagenes/X-wing.jpg",
"TIE Advanced x1" : "/imagenes/TIE Advanced x1.jpg",
"Slave 1" : "/imagenes/Slave 1.jpeg",
"Imperial shuttle" : "/imagenes/Imperial shuttle.jpg",
"EF76 Nebulon-B escort frigate" : "/imagenes/ef76.jpg",
}



const Tarjetasvehiculos = (props) => {
    return (
       
        <Card className = "col-lg-3">
            <CardImg top width="100%" src={imagenes[props.name]} alt="Card image cap" />
            <CardBody>
                <CardTitle className="section-heading-upper">Nombre: {props.name}</CardTitle>
                <CardSubtitle>
                    
                    <li>Modelo {props.model}</li>
                    <li>Tripulacion: {props.crew}</li>
                    <li>Clase: {props.starship_class}</li>
                    <li>Pasageros: {props.passengers} </li>
                
                </CardSubtitle>
                <CardText> {props.films}</CardText>
                
            </CardBody>
        </Card>
       
    )
}
export default Tarjetasvehiculos


import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

let imagenes = {"Luke Skywalker" : "/imagenes/luke.png" ,
"C-3PO" : "/imagenes/3po.png",
"R2-D2" : "/imagenes/r2d2.png",
"Darth Vader" : "/imagenes/darth.png",
"Leia Organa" : "/imagenes/leia.png",
"Owen Lars" : "/imagenes/owen.png",
"Beru Whitesun lars" : "/imagenes/beru.jpg",
"R5-D4" : "/imagenes/r5.png",
"Biggs Darklighter" : "/imagenes/bigs.jpg",
"Obi-Wan Kenobi" : "/imagenes/obi.jpeg",
}



const Tarjetaspersonaje = (props) => {
    return (
       
        <Card className = "col-lg-3">
            <CardImg top width="100%" src={imagenes[props.name]} alt="Card image cap" />
            <CardBody>
                <CardTitle className="section-heading-upper"> <strong>{props.name}</strong> </CardTitle>
                <CardSubtitle>
                    
                    <li>Genero {props.gender}</li>
                    <li>Altura: {props.height}</li>
                    <li>Nacimiento: {props.birth_year}</li>
                    <li>País de Origen: {props.homeworld} </li>
                
                </CardSubtitle>
                <CardText> {props.films}</CardText>
                
            </CardBody>
        </Card>
       
    )
}
export default Tarjetaspersonaje


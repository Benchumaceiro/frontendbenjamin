import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

let imagenes = {"Alderaan" : "/imagenes/Alderaan.jpeg" ,
"Yavin IV" : "/imagenes/Yavin IV.jpeg",
"Hoth" : "/imagenes/Hoth.jpeg",
"Dagobah" : "/imagenes/Dagobah.jpeg",
"Bespin" : "/imagenes/Bespin.jpeg",
"Endor" : "/imagenes/Endor.jpg",
"Naboo" : "/imagenes/Naboo.jpeg",
"Coruscant" : "/imagenes/Coruscant.jpeg",
"Kamino" : "/imagenes/Kamino.jpg",
"Geonosis" : "/imagenes/Geonosis.jpg",
}



const Tarjetasplanetas = (props) => {
    return (
       
        <Card className = "col-lg-3">
            <CardImg top width="100%" src={imagenes[props.name]} alt="Card image cap" />
            <CardBody>
                <CardTitle className="section-heading-upper"><strong>{props.name}</strong></CardTitle>
                <CardSubtitle>
                    
                <li> <strong>Diametro:</strong> Diametro: {props.diameter}</li>
                    <li> <strong>Población:</strong> {props.population}</li>
                    <li> <strong>Clima:</strong>{props.climate}</li>
                    <li> <strong>Terreno: </strong> {props.terrain} </li>
                    <li> <strong>Agua:</strong> {props.surface_water} </li>
                </CardSubtitle>
                <CardText> </CardText>
                
            </CardBody>
        </Card>
       
    )
}
export default Tarjetasplanetas


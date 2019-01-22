import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

let imagenes = {"A New Hope" : "/imagenes/1.jpg" ,
"Return of the Jedi" : "/imagenes/VI.jpg" , 
"The Empire Strikes Back" : "/imagenes/v.jpg",
 "The Phantom Menace" : "/imagenes/I.jpeg",
"Attack of the Clones" : "/imagenes/II.jpg",
"Revenge of the Sith" : "/imagenes/III.jpg",
"The Force Awakens" : "/imagenes/VII.jpeg",
}



const Tarjeta = (props) => {
    return (
       
        <Card className = "col-lg-3">
            <CardImg top width="100%" src={imagenes[props.title]} alt="Card image cap" />
            <CardBody>
                <CardTitle className="section-heading-upper"><strong>{props.title}</strong></CardTitle>
                <CardSubtitle>
                    
                    <li> <strong>Director:</strong> {props.director}</li>
                    <li> <strong>Productor:</strong> {props.producer}</li>
                    <li> <strong>Fecha:</strong> {props.release_date}</li>
                    <li> <strong>Episodio:</strong> {props.episode_id}</li>
                
                </CardSubtitle>
                <CardText>"{props.opening_crawl}"</CardText>
                
            </CardBody>
        </Card>
      
       
    )
}
export default Tarjeta
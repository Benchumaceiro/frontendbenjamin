import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

let imagenes = {
    "A New Hope" : "/imagenes/1.jpg"
}

const Tarjeta = (props) => {
    return (
       
        <Card className = "col-lg-3">
            <CardImg top width="100%" src={imagenes[props.title]} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
       
    )
}
export default Tarjeta
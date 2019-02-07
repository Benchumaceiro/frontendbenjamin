import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
           
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"><Link to="/" className="nav-link text-uppercase text-expanded">
                Star Wars
              </Link></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"><Link to="/films" className="nav-link text-uppercase text-expanded">
                Peliculas
              </Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <Link to="/personajes" className="nav-link text-uppercase text-expanded">
                Personajes
              </Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Link to="/vehiculos" className="nav-link text-uppercase text-expanded">
                Vehiculos
              </Link></a>
              </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Link to="/planetas" className="nav-link text-uppercase text-expanded">
                Planetas
              </Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Link to="/cruceros" className="nav-link text-uppercase text-expanded">
                Cruceros Espaciales
              </Link></a>
              </li>
        </ul>
      </div>
    </div>
  </nav>
 
<br/>

  </div>
  )}
export default Menu;

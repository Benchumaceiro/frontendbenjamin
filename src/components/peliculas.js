import React from 'react';
import Logo from '../imagenes/LogoStarwars.png';



const Peliculas = (props) => {
    return (
        <div>
            <header className="py-5 bg-image-full" >
                <img className="img-fluid d-block mx-auto" src={Logo} alt="" />
            </header>

            <section className="py-5">
                <div className="container">
                    <h1>Star Wars</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
            </section>

        </div>
    )
}

export default Peliculas


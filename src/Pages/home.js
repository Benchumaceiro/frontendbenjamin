import React from 'react';
import Logo from '../imagenes/LogoStarwars.png';



const Home = (props) => {
    return (
        <div>
            <header className="py-5 bg-image-full" >
                <img className="img-fluid d-block mx-auto" src={Logo} alt="" />
            </header>

            <section className="py-5">
                <div className="container">

                </div>
            </section>

        </div>
    )
}

export default Home
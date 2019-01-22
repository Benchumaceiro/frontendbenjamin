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
                    <h1>Star Wars</h1>
                    <p className="lead">4GEEKSACADEMY</p>
                    <p>Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie. The saga quickly became a worldwide pop culture phenomenon.
The first film, getting its in-universe chronological number as Episode IV after 1981 re-release, was followed by two successful sequels, Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983); these three films constitute the original Star Wars trilogy. A prequel trilogyof Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002) and Episode III: Revenge of the Sith (2005), was met with mixed reactions from critics and fans. Finally, a concluding sequel trilogy of the nine-episode saga began with Episode VII: The Force Awakens (2015), continued with Episode VIII: The Last Jedi (2017) and is aimed to end with the final 2019 movie The first eight films were nominated for Academy Awards (with wins going to the first two released) and were commercially successful, with a combined box office revenue of over US$8.5 billion Together with the theatrical spin-off films The Clone Wars (2008), Rogue One (2016), and Solo: A Star Wars Story (2018), Star Wars is the second-highest-grossing film series of all time. 
The film series has spawned into other media, including books, television shows, computer and video games, theme park attractions and lands, and comic books, resulting in significant development of the series' fictional universe. Star Wars holds a Guinness World Records title for the "Most successful film merchandising franchise". In 2018, the total value of the Star Wars franchise was estimated at US$65 billion, and it is currently the fifth-highest-grossing media franchise.
</p>
                </div>
            </section>

        </div>
    )
}

export default Home
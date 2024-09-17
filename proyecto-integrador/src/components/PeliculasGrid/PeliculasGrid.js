import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculaGrid.css"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class PeliculasGrid extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=9458a99baf5a9ba3fe341cd43217ef95&query=terminator")
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas:data.results.slice(0,5)})
            }))
        .catch(error => console.log(error));
        
    }

    render() {
        return (
        <>
        <section className='cardContainer'>
            {
               this.state.peliculas.map((pelicula, idx) => 
                (<Pelicula pelicula= {pelicula} key= {idx}/>))
               
            }
        </section>

        <button><Link to="/verTodas">Ver todas</Link></button>
        </>
        )
    }
};

export default PeliculasGrid; 

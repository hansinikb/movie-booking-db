import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useParams()

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        const result = await axios.get("http://localhost:8080/movies")
        setMovies(result.data)
    };

    const deleteMovie = async (id) => {
        await axios.delete(`http://localhost:8080/movie/${id}`)
        loadMovies()
    };

    return (
        <div className='container'>
            <div className='py-2'>
                <Link className="btn btn-outline-dark" to="/addMovie">Add Movie</Link>
            </div>
            <div className='py-4 row row-cols-1 row-cols-md-3 g-4'>
                {
                    movies.map((movie, index) => (
                        <div className="card p-3 m-3" style={{ "width": "20rem" }} key={movie.id}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><p className="card-text"><small className="text-body-secondary">Director: {movie.director}</small></p></li>
                                <li className="list-group-item"><p className="card-text"><small className="text-body-secondary">Language: {movie.language}</small></p></li>
                                <li className="list-group-item"><p className="card-text"><small className="text-body-secondary">Genres: {movie.genre}</small></p></li>
                            </ul>
                            <div className="card-body">

                                <Link className='btn btn-primary mx-2' to={`/viewmovie/${movie.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2' to={`/editmovie/${movie.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2' onClick={() => deleteMovie(movie.id)}>Delete</button>
                            </div>
                        </div>

                    ))
                }


            </div >
        </div >
    )
}

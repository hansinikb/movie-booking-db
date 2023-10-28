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
        const result = await axios.get("http://localhost:3000/movies")
        setMovies(result.data)
    };

    const deleteMovie = async (id) => {
        await axios.delete(`http://localhost:3000/movies/${id}`)
        loadMovies()
    };

    return (
        <div className='container'>
            <div className='py-2'>
                <Link className="btn btn-outline-light" to="/addMovie">Add Movie</Link>
            </div>
            <div className='py-4'>


                {
                    movies.map((movie, index) => (
                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={movie.img} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{movie.title}</h5>
                                        <p class="card-text">{movie.description}</p>
                                        <p class="card-text"><small class="text-body-secondary">{movie.director}</small></p>
                                        <p class="card-text"><small class="text-body-secondary">{movie.language}</small></p>
                                        <p class="card-text"><small class="text-body-secondary">{movie.genre}</small></p>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editmovie/${movie.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteMovie(movie.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">movie.title</h5>
                                <p class="card-text">movie.description</p>
                                <p class="card-text"><small class="text-body-secondary">movie.director</small></p>
                                <p class="card-text"><small class="text-body-secondary">movie.language</small></p>
                                <p class="card-text"><small class="text-body-secondary">movie.genre</small></p>
                                <button className='btn btn-primary mx-2'>View</button>
                                <Link className='btn btn-outline-primary mx-2' to={`/editmovie/1`}>Edit</Link>
                                <button className='btn btn-danger mx-2'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

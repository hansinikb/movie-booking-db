import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        loadMovies();
    },[]);

    const loadMovies = async() =>{
        const result = await axios.get("http://localhost:3000/movies")
        setMovies(result.data)
    }

    return (
        <div className='container'>
            <div className='py-2'>
                <Link className="btn btn-outline-light" to="/addMovie">Add Movie</Link>
            </div>
            <div className='py-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            movies.map((movie,index)=>(
                                <tr>
                                    <th scope="row" key = {index}>{index+1}</th>
                                    <td>{movie.name}</td>
                                    <td>{movie.description}</td>
                                    <td>{movie.rating}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <button className='btn btn-outline-primary mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                                
                            ))
                            }
                        <tr>
                            <th scope="row">1</th>
                            <td>movie.name</td>
                            <td>movie.description</td>
                            <td>movie.rating</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <button className='btn btn-outline-primary mx-2'>Edit</button>
                                <button className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewMovie() {

    const [user,setUser] = useState({
        name:"",
        description:"",
        rating:""
    })
    const{id} = useParams();

    useEffect(()=>{
        loadUser()
    },[])
    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3000/movies/${id}`)
        setUser(result.data)
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <h2 className='tect-center m-4'>View Movies</h2>
                <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>hello</div>
                <div className='card'>
                    <div className='card-header'>
                        Details of the movie: {movie.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {movie.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Director: </b>
                                {movie.director}
                            </li>
                            <li className='list-group-item'>
                                <b>Language: </b>
                                {movie.language}
                            </li>
                            <li className='list-group-item'>
                                <b>Genres: </b>
                                {movie.genre}
                            </li>
                            <li className='list-group-item'>
                                <b>Description: </b>
                                {movie.description}
                            </li>
                            <li className='list-group-item'>
                                <b>Rating: </b>
                                {movie.rating}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to= {"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}

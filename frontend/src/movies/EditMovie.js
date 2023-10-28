import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

export default function EditMovie() {

    let navigate = useNavigate()
    const {id} = useParams()

    const[movie, setMovie] = useState({
        title: "",
        genre: "",
        director: "",
        language:"",
        description:""
    });

    const {title,genre,director,language, description} = movie;

    const onInputChange = (e) =>{
        setMovie({...movie,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadMovie()
    },[])

    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:3000/movies/${id}`,movie);
        navigate("/")
    }
    
    const loadMovie = async () =>{
        const result = await axios.get(`http://localhost:3000/movies/${id}`)
        setMovie(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='tect-center m-4'>Edit Movie</h2>
                <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="input-group mb-3">
                        <span htmlFor="Name" className="input-group-text">Title</span>
                        <input type="text" className="form-control" placeholder='Name of movie' name="name" value={title} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span htmlFor="Director" className="input-group-text">Director</span>
                        <input type="text" className="form-control" placeholder='Director of movie' name="name" value={director} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span htmlFor="Language" className="input-group-text">Language</span>
                        <input type="text" className="form-control" placeholder='Language of movie' name="name" value={language} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text" id="Genre">Genre</span>
                    <select multiple className="form-select" value={genre} onChange={(e) => onInputChange(e)}>
                        <option value="Thriller">Thriller</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Romance">Romance</option>
                        <option value="Animated">Animated</option>
                    </select>
                    </div>


                    <div className="input-group mb-3">
                        <span htmlFor="Name" className="input-group-text pt-4 pb-4">Description</span>
                        <input type="text" className="form-control" placeholder='Movie description' name="desc" value = {description}/>
                    </div>
                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <Link type="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


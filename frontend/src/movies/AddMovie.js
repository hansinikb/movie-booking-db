import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

export default function AddMovie() {

    let navigate = useNavigate()

    const[movie, setMovie] = useState({
        title: "",
        genre: "",
        director: "",
        language:"",
        description:""
    });

    const {title,genre,director,language, description} = movie;

    const onInputChange = (e) =>{
        setMovie({...movie,[e.target.title]:e.target.value});
    };

    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3000/movies",movie);
        navigate("/")
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='tect-center m-4'>Add Movie</h2>
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
                        <span htmlFor="Genre" className="input-group-text">Genre</span>
                        <select multiple className="form-select" value={genre} onChange={(e) => onInputChange(e)}>
                            <option value="English">Thriller</option>
                            <option value="Spanish">Mystery</option>
                            <option value="French">Adventure</option>
                            <option value="French">Romance</option>
                            <option value="French">Animated</option>
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


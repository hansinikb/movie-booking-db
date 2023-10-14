import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

export default function EditMovie() {

    let navigate = useNavigate()
    const {id} = useParams()
    const[movie, setMovie] = useState({
        name: "",
        description: "",
        rating: "",

    });

    const {name,description,rating} = movie;

    const onInputChange = (e) =>{
        SetMovie({...movie,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser()
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
                        <span htmlFor="Name" className="input-group-text">Name</span>
                        <input type="text" className="form-control" placeholder='Name of movie' name="name" value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span htmlFor="Name" className="input-group-text pt-4 pb-4">Description</span>
                        <input type="text" className="form-control" placeholder='Movie description' name="desc" value = {description}/>
                    </div>
                    <div className="input-group mb-3">
                        <span htmlFor="Name" className="input-group-text">Rating</span>
                        <div className='p-2'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rating" value="1" />
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rating" value="2" />
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rating" value="3" />
                                <label class="form-check-label" for="inlineRadio1">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rating" value="4" />
                                <label class="form-check-label" for="inlineRadio2">4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rating" value="5" />
                                <label class="form-check-label" for="inlineRadio1">5</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <Link type="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


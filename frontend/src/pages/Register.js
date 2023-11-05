import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Register() {

    let navigate = useNavigate()

    const[user, setUser] = useState({
        name: "",
        address: "",
        phone_number: "",
        email:"",
        password: ""
    });

    const {name, address, phone_number, email,password} = user;

    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3000/customer",user);
        navigate("/login")
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="input-group mb-3">
                        <span htmlFor="Name" className="input-group-text">Name</span>
                        <input type="text" className="form-control" placeholder='Name of user' name="name" value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span htmlFor="Address" className="input-group-text">Address</span>
                        <input type="text" className="form-control" placeholder='Address of user' name="name" value={address} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span htmlFor="Language" className="input-group-text">Phone number</span>
                        <input type="tel" pattern='[0-9]{10}' className="form-control" placeholder='Phone number of user' name="name" value={phone_number} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span htmlFor="Email" className="input-group-text">Email</span>
                        <input type="text" className="form-control" placeholder='Email of user' name="name" value={email} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span htmlFor="Password" className="input-group-text">Enter a password</span>
                        <input type="text" className="form-control" placeholder='Password of user' name="name" value={password} onChange={(e)=>onInputChange(e)}/>
                    </div>

                
                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <Link type="submit" className='btn btn-outline-danger mx-2' to="/login">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Login() {
        const [user, setUser] = useState({});
        const { user_id } = useParams();
        const [error, setError] = useState('');
        const [email, setEmail] = useState('');
      
        useEffect(() => {
          const fetchUser = async () => {
            try {
              const response = await axios.get(`http://localhost:3000/${user_id}`);
              setUser(response.data);
            } catch (error) {
              if ( error.response.status === 404 && error.response) {
                setError('Invalid email or password. Please try again.'); 
              } else {
                console.error('Error fetching data: ', error);
              }
            }
          };
      
          if (email) {
            fetchUser(); // Call the fetchUser function only if the email is present
          }
        }, [email]);

        const handleEmailChange = (e) => {
            setEmail(e.target.value); // Update the email state when the input changes
          };

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid"/>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" value={email} onChange={handleEmailChange} />
                                                <label className="form-label" htmlFor="form2Example17">Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                            </div>
                                            <div>{error && (<p className="error text-warning"> {error} </p>)}</div>
                                            <p className="mb-5 pb-lg-2">Don't have an account? <Link to = "/register">Register here</Link></p>
                                            <Link type="submit" className='btn btn-outline-primary mx-2' to="/">Go Back</Link>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

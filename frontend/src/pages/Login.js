import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate} from 'react-router-dom';

export default function Login({handleLogin}) {
        const [customer, setCustomer] = useState({
            customerid:"",
            name:""
        });
        let navigate = useNavigate()
        const { customerid } = useParams();
        const [error, setError] = useState('');
        const [email, setEmail] = useState('');
        const auth = localStorage.getItem('username')
        const [loggedIn, setLoggedIn] = useState(!!auth);
      
        // useEffect(() => {
        //   if (email) {
        //     fetchUser(); // Call the fetchUser function only if the email is present
        // }
        // }, [email]);

        const fetchUser = async () => {
            try {
              // Fetch all customers from the server
              const response = await axios.get('http://localhost:8080/customer');

              // Find the customer with the matching email
              const customer = response.data.find(cust => cust.email === email);
          
              if (customer) {
                // Set the customer data
                setCustomer(customer);
                setLoggedIn(true);
                localStorage.setItem('username', customer.name);
                localStorage.setItem('userid', customer.customerid);
                navigate('/')
              } else {
                // If no matching customer is found, handle it accordingly
                setError('Customer not found. Please try again.');
              }
            } catch (error) {
              // Handle other errors
              console.error('Error fetching data: ', error);
            }
          };
          
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
                                                <label className="form-label" htmlFor="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={fetchUser}>Login</button>
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

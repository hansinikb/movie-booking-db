import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';


export default function Navbar() {
    const auth = localStorage.getItem('username')
    const onLogout = () =>{
        localStorage.removeItem('username')
        navigate('/')
    }
    let navigate = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Movies</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/viewshowtimes'>Showtimes</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Venues</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Food Options</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary mx-2" type="submit">Search</button>
                        </form> */}
                        {auth ? (
                            <ul className="navbar-nav ms-auto">
                            <li>
                                <p className='navbar-brand'>Welcome, {localStorage.getItem('username')}!</p>
                            </li>
                            <li>
                                <button className="btn btn-primary mx-2" onClick={onLogout}>Logout</button>
                            </li>
                            </ul>
                        ) : (
                            <Link className="btn btn-primary mx-2" type="submit" to="/login">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

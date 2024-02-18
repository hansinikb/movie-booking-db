import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate} from 'react-router-dom';

export default function ViewShowtimes() {
    const [showtimes, setShowtimes] = useState([]);
    const [error, setError] = useState(null);

    const fetchShowtimes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/showtimes`);
            setShowtimes(response.data);
        } catch (error) {
            setError('Error fetching showtimes: ' + error.message);
        }
    };
    
    
    useEffect(()=>{
        fetchShowtimes();
    },[])

    const deleteShowtime = async (id) => {
        await axios.delete(`http://localhost:8080/showtime/${id}`)
        fetchShowtimes()
    };

    return (
        <div>
          <div className='container'>
          <div className='py-2'>
                <Link className="btn btn-outline-dark" to="/addshowtime">Add Showtime</Link>
            </div>
            <div className='row'>
              <h2 className='text-center m-4'>Available showtimes</h2>
              <div className='col-md-10 offset-md-1 border rounded p-4 mt-2 shadow'>
                {error && <p>Error: {error}</p>}
                 {!error && (
                  <div className='py-4'>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Movie Name</th>
                          <th scope="col">Theatre Name</th>
                          <th scope="col">Location</th>
                          <th scope="col">Date</th>
                          <th scope="col">Showtime</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showtimes.map((showtime, index) => (
                          <tr key={`${showtime.showtimeid}`}>
                            <th scope="row">{index + 1}</th>
                            <td>{showtime.movie.title}</td>
                            <td>{showtime.theatre.name}</td>
                            <td>{showtime.theatre.location}</td>
                            <td>{showtime.date}</td>
                            <td>{showtime.starttime + ' - ' + showtime.endtime}</td>
                            <td>
                              <Link className='btn btn-primary mx-2' to={`/bookmovie/${showtime.showtimeid}`}>Book</Link>
                              <button className='btn btn-danger mx-2' onClick={() => deleteShowtime(showtime.showtimeid)}>Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )} 
                <Link className='btn btn-primary my-2 p-2 ' to={"/"}>Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      );
}


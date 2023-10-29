import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewMovie() {

    const [movie, setMovie] = useState({})
    const { movie_id } = useParams();

    const [showtimes, setShowtimes] = useState([]);



    useEffect(() => {
        const fetchShowtimesAndMovie = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/viewmovie/${movie_id}`);
            const filteredShowtimes = response.data.filter(
              (showtime) => showtime.movieID === movie_id
            );
            setShowtimes(filteredShowtimes);
    
            const movieResponse = await axios.get(
                `http://localhost:3000/viewmovie/${movie_id}`
            );
            setMovie(movieResponse.data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchShowtimesAndMovie();
      }, [movie_id]);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h2 className='tect-center m-4'>Available showtimes for movie.title</h2>
                    <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>
                    <div className='py-4'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Theatre Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Showtime</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {showtimes.map((showtime, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{showtime.theater.name}</td>
                                        <td>{showtime.theater.location}</td>
                                        <td>{showtime.date}</td>
                                        <td>{showtime.startTime + ' - ' + showtime.endTime}</td>
                                        <td>
                                            <button className='btn btn-primary mx-2'>Book</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link className='btn btn-primary my-2 p-2 ' to={"/"}>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

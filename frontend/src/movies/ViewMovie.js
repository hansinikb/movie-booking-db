import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewMovie() {
  const [movie, setMovie] = useState({
    title: "",
  });
  const {id } = useParams();
  const {title} = movie;
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMovie = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/movie/${id}`);
      setMovie(result.data);
    } catch (error) {
      setError('Error loading movie: ' + error.message);
    }
  }; 

  const fetchShowtimesAndMovie = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/showtimes`);
      console.log(response.data)
      const filteredShowtimes = response.data.filter(
        (showtime) => showtime.movie.id.toString() === id
      );
      console.log(filteredShowtimes)
      setShowtimes(filteredShowtimes);
      setLoading(false);
    } catch (error) {
      setError('Error fetching showtimes: ' + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await loadMovie();
        await fetchShowtimesAndMovie();
      } catch (error) {
        setError('Error: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <h2 className='text-center m-4'>Available showtimes for {title}</h2>
          <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
             {!loading && !error && (
              <div className='py-4'>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Theatre Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Showtime</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showtimes.map((showtime, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{showtime.theatre.name}</td>
                        <td>{showtime.theatre.location}</td>
                        <td>{showtime.date}</td>
                        <td>{showtime.starttime + ' - ' + showtime.endtime}</td>
                        <td>
                          <button className='btn btn-primary mx-2'>Book</button>
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

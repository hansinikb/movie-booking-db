import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { Link, useNavigate } from 'react-router-dom';

export default function AddShowtime() {
    let navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    const [theatres, setTheatres] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedTheatre, setSelectedTheatre] = useState('');
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    useEffect(() => {
        // Fetch movies and theatres data from backend
        axios.get('http://localhost:8080/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });

        axios.get('http://localhost:8080/theatres')
            .then(response => {
                setTheatres(response.data);
            })
            .catch(error => {
                console.error('Error fetching theatres:', error);
            });
    }, []);

    const handleStartTimeChange = (time) => {
        setStartTime(time);
    };

    const handleEndTimeChange = (time) => {
        setEndTime(time);
    };

    const handleAddShowtime = () => {
        // Send data to backend to add showtime to the table
        const showtimeData = {
            date: date.toISOString().slice(0, 10),
            starttime: startTime,
            endtime: endTime,
            movie: { id: selectedMovie },
            theatre: { theatreid: selectedTheatre }
        };
        axios.post('http://localhost:8080/showtime', showtimeData)
            .then(response => {
                console.log('Showtime added successfully:', response.data);
                // Optionally, redirect to a different page or show a success message
            })
            .catch(error => {
                console.log(showtimeData)
                console.error('Error adding showtime:', error);
            });
            navigate("/viewshowtimes")
    };

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='tect-center m-4'>Add Showtime</h2>
                <div className='col-md-9 offset-md-2 border rounded p-4 mt-2 shadow'>
                    <div className="input-group mb-3">
                        <label htmlFor="movie" className="input-group-text">Select Movie:</label>
                        <select className="form-select" id="movie" value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
                            <option value="">Select a movie</option>
                            {movies.map(movie => (
                                <option key={movie.id} value={movie.id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="theatre" className="input-group-text">Select Theatre:</label>
                        <select className="form-select"  id="theatre" value={selectedTheatre} onChange={(e) => setSelectedTheatre(e.target.value)}>
                            <option value="">Select a theatre</option>
                            {theatres.map(theatre => (
                                <option key={theatre.theatreid} value={theatre.theatreid}>{theatre.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Date:</label>
                        <DatePicker className="form-control" selected={date} onChange={setDate} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Time:</label>
                        <TimePicker className="form-control" value={startTime} onChange={handleStartTimeChange} />
                        <span className='mx-2 mt-2'>to </span>
                        <TimePicker className="form-control" onChange={handleEndTimeChange} value={endTime} />
                    </div>
                <button className='btn btn-outline-primary' onClick={handleAddShowtime}>Add Showtime</button>
                <Link type="submit" className='btn btn-outline-danger mx-2' to="/viewshowtimes">Cancel</Link>
            </div>
        </div>
    </div>
    );
}

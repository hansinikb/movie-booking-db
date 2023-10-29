import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function BookMovie() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookedSeats, setBookedSeats] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/bookmovie/${id}`);
        setBookedSeats(response.data);
      } catch (error) {
        console.error('Error fetching booked seats: ', error);
      }
    };
    fetchBookedSeats();
  }, [id]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      const updatedSeats = selectedSeats.filter((s) => s !== seat);
      setSelectedSeats(updatedSeats);
      const price = calculatePrice(updatedSeats.length);
      setTotalPrice(price);
    } else {
      const updatedSeats = [...selectedSeats, seat];
      setSelectedSeats(updatedSeats);
      const price = calculatePrice(updatedSeats.length);
      setTotalPrice(price);
    }
  };

  const calculatePrice = (numSeats) => {
    const basePrice = 300;
    return basePrice * numSeats;
  };

  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentSelection = (e) => {
    setPaymentMethod(e.target.value);
  }
  const handleBooking = async () => {
    try {

      // Generate a new paymentID and timestamp
      const paymentID = generatePaymentID();
      const timestamp = new Date().toISOString();

      // Make an API call to store the payment information in the backend
      await axios.post(`http://localhost:3000/bookmovie/${id}`, {
        paymentID,
        timestamp,
        paymentMethod,
        seats: selectedSeats,
        totalPrice,
      });

      setSelectedSeats([]);
      setTotalPrice(0);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error during booking: ', error);
      alert('Booking failed. Please try again.');
    }
  };

  const generatePaymentID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const columns = 10;

  return (
    <div>
      <h2 className='tect-center m-4'>Seat Booking</h2>
      <div className='screen'>
        <h4>_____________________________</h4>
        <h3>Screen</h3>
        <h4>______________________________________</h4>
      </div>
      <div className="d-flex flex-column align-items-center seat-container p-3">
        {rows.map((row) => (
          <div key={row} className="row" style={{ display: 'flex', margin: '5px' }}>
            {Array.from({ length: columns }, (_, index) => {
              const seatId = row + (index + 1);
              const isSeatSelected = selectedSeats.includes(seatId);
              const isSeatUnavailable = bookedSeats.includes(seatId);// Replace with your logic for unavailable seats
              return (
                <button
                  key={index}
                  onClick={() => handleSeatSelection(seatId)}
                  className={
                    isSeatSelected
                      ? 'seat-button-selected btn btn-info w-10'
                      : isSeatUnavailable
                        ? 'seat-button-unavailable btn-primary w-10'
                        : 'seat-button-available active btn w-10'
                  }
                  data-bs-toggle="button"
                  disabled={isSeatUnavailable}
                  style={{ width: '40px', height: '40px', margin: '5px', borderRadius: '5px', alignContent: 'center' }}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className='col-md-6 offset-md-3 p-10 mt-25 shadow'>
        <div>
          <h3><span className="badge bg-light">Selected Seats</span>
            {selectedSeats.map((seat, index) => (
              <span key={index}>{seat} </span>
            ))}</h3>
        </div>

        <h3><span className="badge bg-light">Total Price: </span> ${totalPrice}</h3>

        <select className="form-select m-3 w-50 align-items-center mx-auto" aria-label="Payment method" placeholder='Payment method' onChange={handlePaymentSelection} required >
          <option value="credit card">Credit Card</option>
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="online banking">Online Banking</option>
        </select>
        <button onClick={handleBooking} disabled={selectedSeats.length === 0} className='btn btn-primary'>
          Book Seats
        </button>
      </div>
    </div>
  );
};


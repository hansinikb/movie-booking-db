// package com.example.demo.services;
// import com.example.demo.repository.ShowtimeRepository;
// import com.example.demo.repository.BookingRepository;

// import com.example.demo.model.Booking;
// import com.example.demo.model.Showtime;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.config.Task;
// import org.springframework.stereotype.Service;
// @Service
// public class ShowtimeServices {
//     @Autowired 
//     ShowtimeRepository showtimeRepository;
//     public Showtime insertShowtime (Showtime showtime)
//     {
        
//         // Booking booking =showtime.getBooking();
//         // booking.setShowtime(showtime);

// 		// showtime.setBooking(showtime.getBooking());
//         // return showtimeRepository.save(showtime);
//         Booking booking = showtime.getBooking();
        
//         if (booking != null) { // Check if booking is not null
//             booking.setShowtime(showtime);
//             showtime.setBooking(booking);
//             return showtimeRepository.save(showtime);
//         } else {
//             // Handle the case where booking is null, e.g., throw an exception or return an error response.
//             // You can also add logging for debugging purposes.
//             throw new IllegalArgumentException("Booking is null");
//         }
//     }
// }

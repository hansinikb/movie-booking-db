// package com.example.demo.services;
// import com.example.demo.repository.MovieRepository;
// import com.example.demo.repository.BookingRepository;

// import com.example.demo.model.Booking;
// import com.example.demo.model.Movie;
// import com.example.demo.model.Showtime;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.config.Task;
// import org.springframework.stereotype.Service;
// @Service
// public class MovieServices {/////////////movie(one) - showtime(many)
//     @Autowired 
//     MovieRepository movieRepository;
//     public Movie insertMovie (Movie movie)
//     {
//         for(Showtime showtime : movie.getShowtimeList())
// 		{
// 			showtime.setMovie(movie);
//             //bookingRepository.save(booking);
// 		}
// 		movie.setShowtimeList(movie.getShowtimeList());
//         return movieRepository.save(movie);
//     }
// }

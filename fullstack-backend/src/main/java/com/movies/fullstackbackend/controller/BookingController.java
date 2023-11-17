package com.movies.fullstackbackend.controller;

import com.movies.fullstackbackend.exception.UserNotFoundException;
import com.movies.fullstackbackend.model.Booking;
import com.movies.fullstackbackend.repository.BookingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController 
@CrossOrigin("http://localhost:3000")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository; // Corrected variable name
    
    @Autowired
    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping(value = "/booking")
    public Booking newBooking(@RequestBody Booking newBooking) {
        return bookingRepository.save(newBooking);
    }

    @GetMapping("/bookings")
    List<Booking> getAllBooking(){

        return bookingRepository.findAll(); // Corrected variable name
    }

    @DeleteMapping("/booking/{id}")
    String deleteBooking(@PathVariable Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        bookingRepository.deleteById(id);
        return "booking with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/booking/{id}")
    Booking updateBooking(@RequestBody Booking newBooking, @PathVariable Long id) {
        return bookingRepository.findById(id)
                .map(booking -> {

                    booking.setSeatnumbers(newBooking.getSeatnumbers());
                    // booking.setNumberoftickets(newBooking.getNumberoftickets());
                    
                    // booking.setCustomer(newBooking.getCustomer());

                    return bookingRepository.save(booking);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("booking/{id}")
    Booking getUserById(@PathVariable Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}

package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Booking;
import com.example.demo.model.Customer;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.exception.UserNotFoundException;

import java.util.List;


@RestController
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository; // Corrected variable name
    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping(value="/booking")
    Booking newBooking(@RequestBody Booking newBooking){
        //Customer customer = customerRepository.findById(newBooking.getCustomer()).orElseThrow(() -> new UserNotFoundException(newBooking.getCustomerId()));
        // Customer customer =customerRepository.findById(newBooking.getCustomer().getCustomerid()).orElseThrow(() -> new UserNotFoundException(newBooking.getCustomer().getCustomerid()));

        // // Set the Customer for the Booking
        // newBooking.setCustomer(customer);
        return bookingRepository.save(newBooking); // Corrected variable name
    }
    @GetMapping("/booking")
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
                    
                    booking.setCustomer(newBooking.getCustomer());

                    return bookingRepository.save(booking);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("booking/{id}")
    Booking getUserById(@PathVariable Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}

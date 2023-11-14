package com.movies.fullstackbackend.services;
import com.movies.fullstackbackend.repository.CustomerRepository;
import com.movies.fullstackbackend.repository.BookingRepository;

import com.movies.fullstackbackend.model.Booking;
import com.movies.fullstackbackend.model.Customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
@Service
public class CustomerServices {
    @Autowired 
    CustomerRepository customerRepository;
    public Customer insertCustomer (Customer customer)
    {
        for(Booking booking : customer.getBookingList())
		{
			booking.setCustomer(customer);
            //bookingRepository.save(booking);
		}
		customer.setBookingList(customer.getBookingList());
        return customerRepository.save(customer);
    }
}

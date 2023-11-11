package com.example.demo.services;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.BookingRepository;

import com.example.demo.model.Booking;
import com.example.demo.model.Customer;

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

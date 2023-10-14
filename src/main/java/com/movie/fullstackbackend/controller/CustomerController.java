package com.movie.fullstackbackend.controller;

import com.movie.fullstackbackend.model.Customer;
import com.movie.fullstackbackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List; // Import the List class

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository; // Corrected variable name
    @PostMapping(value="/customer")
    Customer newCustomer(@RequestBody Customer newCustomer){

        return customerRepository.save(newCustomer); // Corrected variable name
    }
    @GetMapping("/customers")
    List<Customer> getAllCustomers(){
        return customerRepository.findAll(); // Corrected variable name
    }
}

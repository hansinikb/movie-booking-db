package com.movies.fullstackbackend.controller;

import com.movies.fullstackbackend.exception.UserNotFoundException;
import com.movies.fullstackbackend.model.Payment;
import com.movies.fullstackbackend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

import java.time.LocalDateTime;

@RestController
@CrossOrigin("http://localhost:3000") 
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository; // Corrected variable name

    //@ResponseBody
    @PostMapping(value="/payment")
    Payment newPayment(@RequestBody Payment newPayment){
        //LocalDateTime timestamp = LocalDateTime.parse(newPayment.getPaymenttimestamp());
        //newPayment.setPaymenttimestamp(timestamp);
        return paymentRepository.save(newPayment); // Corrected variable name
    }
    @GetMapping("/payments")
    List<Payment> getAllPayments(){
        return paymentRepository.findAll(); // Corrected variable name
    }

    @DeleteMapping("/payment/{id}")
    String deletePayment(@PathVariable Long id) {
        if (!paymentRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        paymentRepository.deleteById(id);
        return "payment with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/payment/{id}")
    Payment updatePayment(@RequestBody Payment newPayment, @PathVariable Long id) {
        return paymentRepository.findById(id)
                .map(payment -> {

                    //payment.setPaymenttimestamp(newPayment.getPaymenttimestamp());
                    payment.setPaymentmethod(newPayment.getPaymentmethod());
                    payment.setAmount(newPayment.getAmount());
                    // payment.setDiscountname(newPayment.getDiscountname());
                    // payment.setDiscountamt(newPayment.getDiscountamt());
                    payment.setBooking(newPayment.getBooking());

                    return paymentRepository.save(payment);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("payment/{id}")
    Payment getUserById(@PathVariable Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}




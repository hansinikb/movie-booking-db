package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository; // Corrected variable name

    //@ResponseBody
    @PostMapping(value="/payment")
    Payment newPayment(@RequestBody Payment newPayment){

        
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

                    payment.setPaymenttimestamp(newPayment.getPaymenttimestamp());
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




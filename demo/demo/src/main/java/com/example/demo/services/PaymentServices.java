// package com.example.demo.services;
// import com.example.demo.repository.PaymentRepository;
// import com.example.demo.repository.BookingRepository;

// import com.example.demo.model.Booking;
// import com.example.demo.model.Payment;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.config.Task;
// import org.springframework.stereotype.Service;
// @Service
// public class PaymentServices {
//     @Autowired 
//     PaymentRepository paymentRepository;
//     public Payment insertPayment (Payment payment)
//     {
//         //copied
//         // for(Booking booking : payment.getBooking())
// 		// {
// 		// 	booking.setPayment(payment);
//         //     //bookingRepository.save(booking);
// 		// }
// 		payment.setBooking(payment.getBooking());
//         return paymentRepository.save(payment);
//     }
// }

package com.movie.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue
    private Long bookingid;
    private String seat_numbers;
    private Int number_of_tickets;
    @OneToOne(mappedBy="paymentid")
    private Payment payment;
    @OneToOne(mappedBy="showtimeid")
    private Showtime showtime;
    @ManyToOne
    @JoinColumn(name="customerid")
    private Customer customer;

    public Booking(Long id, String seat_numbers, Int number_of_tickets, Payment payment, Showtime showtime) {
        this.id = id;
        this.seat_numbers = seat_numbers;
        this.number_of_tickets = number_of_tickets;
        this.payment = payment;
        this.showtime = showtime;
    }

    public Booking(Long id) {
        this.id = id;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSeat_numbers() {
        return seat_numbers;
    }

    public void setSeat_numbers(String seat_numbers) {
        this.seat_numbers = seat_numbers;
    }

    public Int getNumber_of_tickets() {
        return number_of_tickets;
    }

    public void setNumber_of_tickets(Int number_of_tickets) {
        this.number_of_tickets = number_of_tickets;
    }



}

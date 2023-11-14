package com.movies.fullstackbackend.model;

import jakarta.persistence.*;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
// import java.time.LocalTime.now;

@Entity
public class Payment {
    @Id
    @GeneratedValue
    private Long paymentid;
    private LocalTime paymenttimestamp;
    private String paymentmethod;

    public Long getPaymentid() {
        return paymentid;
    }

    public void setPaymentid(Long paymentid) {
        this.paymentid = paymentid;
    }

    public LocalTime getPaymenttimestamp() {
        return paymenttimestamp;
    }

    public void setPaymenttimestamp(LocalTime paymenttimestamp) {
        this.paymenttimestamp = paymenttimestamp;
    }

    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    // public String getDiscountname() {
    //     return discountname;
    // }

    // public void setDiscountname(String discountname) {
    //     this.discountname = discountname;
    // }

    // public Float getDiscountamt() {
    //     return discountamt;
    // }

    // public void setDiscountamt(Float discountamt) {
    //     this.discountamt = discountamt;
    // }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
    // public void setPaymentTimestampToCurrentTime() {
    //     this.paymenttimestamp = LocalTime.now();
    // }

    private Float amount;
    // private String discountname;
    // private Float discountamt;
    
    @OneToOne
    @JoinColumn(name="booking")
    private Booking booking;






}
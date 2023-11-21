package com.movies.fullstackbackend.model;

import jakarta.persistence.*;

// import java.util.ArrayList;
import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Booking {
    @Id
    @GeneratedValue
    private Long bookingid;
    private List<String> seatnumbers;
    // private Integer numberoftickets;

    public Long getBookingid() {
        return bookingid;
    }

    public void setBookingid(Long bookingid) {
        this.bookingid = bookingid;
    }

    public List<String> getSeatnumbers() {
        return seatnumbers;
    }

    public void setSeatnumbers(List<String> seatnumbers) {
        this.seatnumbers = seatnumbers;
    }

    // public Integer getNumberoftickets() {
    // return numberoftickets;
    // }

    // public void setNumberoftickets(Integer numberoftickets) {
    // this.numberoftickets = numberoftickets;
    // }

    // @JsonManagedReference
    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Showtime getShowtime() {
        return showtime;
    }

    public void setShowtime(Showtime showtime) {
        this.showtime = showtime;
    }

    // @JsonIgnore

    // tried commenting
    @ManyToOne
    // @Column(name="customerid")
    @JoinColumn(name = "customer", referencedColumnName = "customerid")
    // @JsonBackReference
    private Customer customer;

    @OneToOne
    @JoinColumn(name = "payment", referencedColumnName = "paymentid")
    private Payment payment;

    @OneToOne
    @JoinColumn(name = "showtime", referencedColumnName = "showtimeid")
    private Showtime showtime;
    // @JsonIgnore
    // @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    // private Showtime showtime;

}

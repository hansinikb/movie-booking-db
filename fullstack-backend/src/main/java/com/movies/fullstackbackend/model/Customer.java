package com.movies.fullstackbackend.model;

import jakarta.persistence.*;

import java.awt.print.Book; 
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
// @JsonIdentityInfo(generator =
// ObjectIdGenerators.PropertyGenerator.class,property = "customerid")
public class Customer {
    @Id 
    @GeneratedValue
    private Long customerid;
    private String name;
    private String email;
    private String password;

    // public class CustomerRequest {
    // private String name;
    // private String email;
    // private String seatnumbers;
    // private Integer numberoftickets;

    // // Getters and setters for the fields
    // }
    public Long getCustomerid() {
        return customerid;
    }

    public void setCustomerid(Long customerid) {
        this.customerid = customerid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPhoneno() {
        return phoneno;
    }

    public void setPhoneno(Integer phoneno) {
        this.phoneno = phoneno;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // @JsonBackReference
    public List<Booking> getBookingList() {
        return bookingList;
    }

    public void setBookingList(List<Booking> bookingList) {
        this.bookingList = bookingList;
    }

    private Integer phoneno;
    private String address;

    // @OneToMany(cascade = CascadeType.ALL,orphanRemoval=true)
    @JsonIgnore ////// tried
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer") // full correct
    // @JoinColumn(name = "customerid")
    // @JsonManagedReference
    private List<Booking> bookingList = new ArrayList<>();

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}

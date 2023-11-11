package com.example.demo.model;

import jakarta.persistence.*;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
@Entity

public class Screen {
    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }

    @Id
    private String number;
    private Integer capacity;


    // @ManyToOne
    // @JoinColumn(name="theatreid")
    // private Theatre theatre;
    @OneToOne
    @JoinColumn(name="theatre")
    private Theatre theatre;

}
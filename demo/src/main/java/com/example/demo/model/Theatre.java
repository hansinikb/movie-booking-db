package com.example.demo.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Theatre {


    @Id
    @GeneratedValue
    private Long theatreid;
    private String name;
    private String location;
    // @OneToMany(mappedBy="theatre")
    // private List<Screen> screenList=new ArrayList<>();
    // @OneToMany(mappedBy="theatre")
    // private List<FoodVendor> foodVendorList=new ArrayList<>();

    
    @OneToMany(cascade = CascadeType.ALL,mappedBy="theatre")
    private List<Showtime> showtimeList=new ArrayList<>();

    public Long getTheatreid() {
        return theatreid;
    }

    public void setTheatreid(Long theatreid) {
        this.theatreid = theatreid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    // public List<Screen> getScreenList() {
    //     return screenList;
    // }

    // public void setScreenList(List<Screen> screenList) {
    //     this.screenList = screenList;
    // }

    // public List<FoodVendor> getFoodVendorList() {
    //     return foodVendorList;
    // }

    // public void setFoodVendorList(List<FoodVendor> foodVendorList) {
    //     this.foodVendorList = foodVendorList;
    // }

    public List<Showtime> getShowtimeList() {
        return showtimeList;
    }

    public void setShowtimeList(List<Showtime> showtimeList) {
        this.showtimeList = showtimeList;
    }
}
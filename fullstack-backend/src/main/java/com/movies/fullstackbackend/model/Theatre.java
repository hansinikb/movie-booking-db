package com.movies.fullstackbackend.model;

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
    @OneToOne(mappedBy="theatre")
    private Screen screen;
    
    // @OneToMany(cascade = CascadeType.ALL,mappedBy="theatre")
    // private List<Showtime> showtimeList=new ArrayList<>();
    @OneToOne(mappedBy="theatre")
    private Showtime showtime;

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

    public Showtime getShowtime() {
        return showtime;
    }

    public void setShowtime(Showtime showtime) {
        this.showtime = showtime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Screen getScreen() {
        return screen;
    }

    public void setScreen(Screen screen) {
        this.screen = screen;
    }

    // public List<Screen> getScreenList() {
    //     return screenList;
    // }

    // public void setScreenList(List<Screen> screenList) {
    //     this.screenList = screenList;
    // }

    // public List<Showtime> getShowtimeList() {
    //     return showtimeList;
    // }

    // public void setShowtimeList(List<Showtime> showtimeList) {
    //     this.showtimeList = showtimeList;
    // }
}
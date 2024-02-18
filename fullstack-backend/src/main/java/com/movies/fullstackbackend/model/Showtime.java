package com.movies.fullstackbackend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
// import java.util.ArrayList;
// import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

// import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Showtime {
    @Id
    @GeneratedValue
    private Long showtimeid;
    
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "HH:mm")
    private LocalTime starttime;

    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "HH:mm")
    private LocalTime endtime;

    public Long getShowtimeid() {
        return showtimeid;
    }

    public void setShowtimeid(Long showtimeid) {
        this.showtimeid = showtimeid;
    }

    public LocalTime getStarttime() {
        return starttime;
    }

    public void setStarttime(LocalTime starttime) {
        this.starttime = starttime;
    }

    public LocalTime getEndtime() {
        return endtime;
    }

    public void setEndtime(LocalTime endtime) {
        this.endtime = endtime;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }

    // public Booking getBooking() {
    //     return booking;
    // }

    // public void setBooking(Booking booking) {
    //     this.booking = booking; 
    // }

    //    @ManyToMany
//    private List<Movie> movieList=new ArrayList<>() ;

    // @JsonIgnore
    // @ManyToOne
    // @JoinColumn(name="movieid")
    // private Movie movie;
    @ManyToOne
    @JoinColumn(name="movie",referencedColumnName = "id")
    private Movie movie;

    // @JsonIgnore
    @ManyToOne
    @JoinColumn(name="theatre",referencedColumnName = "theatreid")
    private Theatre theatre;
    // @OneToOne
    // @JoinColumn(name="theatreid")
    // private Theatre theatre;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="showtimeid")
    private Booking booking;

    //DONE

    // @JsonIgnore
    // @OneToOne
    // @JoinColumn(name = "booking")  // Replace "booking" with the actual column name in your database
    // private Booking booking;
    // @Column(name="bookingid",insertable = false,updatable = false)
    // private Integer boookingid;



}
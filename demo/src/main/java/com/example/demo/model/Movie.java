// package com.example.demo.model;

// import jakarta.persistence.*;

// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;

// @Entity
// public class Movie {
//     @Id
//     @GeneratedValue
//     private Long id;
//     private String title;

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getTitle() {
//         return title;
//     }

//     public void setTitle(String title) {
//         this.title = title;
//     }

//     public String getGenre() {
//         return genre;
//     }

//     public void setGenre(String genre) {
//         this.genre = genre;
//     }

//     public LocalDate getReleasedate() {
//         return releasedate;
//     }

//     public void setReleasedate(LocalDate releasedate) {
//         this.releasedate = releasedate;
//     }

//     public String getDirector() {
//         return director;
//     }

//     public void setDirector(String director) {
//         this.director = director;
//     }

//     public String getLanguage() {
//         return language;
//     }

//     public void setLanguage(String language) {
//         this.language = language;
//     }

//     public List<Showtime> getShowtimeList() {
//         return showtimeList;
//     }

//     public void setShowtimeList(List<Showtime> showtimeList) {
//         this.showtimeList = showtimeList;
//     }

//     private String genre;
//     private LocalDate releasedate;
//     private String director;
//     private String language;


//     @OneToMany(cascade = CascadeType.ALL,mappedBy="movie")
//     private List<Showtime> showtimeList=new ArrayList<>() ;




// }

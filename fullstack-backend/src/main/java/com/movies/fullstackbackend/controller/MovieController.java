package com.movies.fullstackbackend.controller;

import com.movies.fullstackbackend.exception.UserNotFoundException;
import com.movies.fullstackbackend.model.Movie;
import com.movies.fullstackbackend.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
@CrossOrigin("http://localhost:3000")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository; 

    //@ResponseBody
    @PostMapping(value="/movie")
    Movie newMovie(@RequestBody Movie newMovie){

        return movieRepository.save(newMovie); 
    }
    @GetMapping("/movies")
    List<Movie> getAllMovies(){
        return movieRepository.findAll(); 
    }

    @DeleteMapping("/movie/{id}")
    String deleteMovie(@PathVariable Long id) {
        if (!movieRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        movieRepository.deleteById(id);
        return "movie with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/movie/{id}")
    Movie updateMovie(@RequestBody Movie newMovie, @PathVariable Long id) {
        return movieRepository.findById(id)
                .map(movie -> {

                    movie.setTitle(newMovie.getTitle());
                    movie.setGenre(newMovie.getGenre());
                    movie.setDescription(newMovie.getDescription());
                    movie.setDirector(newMovie.getDirector());
                    movie.setLanguage(newMovie.getLanguage());
                    movie.setShowtime(newMovie.getShowtime());
                    // movie.setImage(newMovie.getImage());
                
                    return movieRepository.save(movie);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("movie/{id}")
    Movie getUserById(@PathVariable Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}





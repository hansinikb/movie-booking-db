package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Movie;
import com.example.demo.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
public class MovieController {
    @Autowired
    private MovieRepository movieRepository; // Corrected variable name

    //@ResponseBody
    @PostMapping(value="/movie")
    Movie newMovie(@RequestBody Movie newMovie){

        return movieRepository.save(newMovie); // Corrected variable name
    }
    @GetMapping("/movies")
    List<Movie> getAllMovies(){
        return movieRepository.findAll(); // Corrected variable name
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
                    movie.setReleasedate(newMovie.getReleasedate());
                    movie.setDirector(newMovie.getDirector());
                    movie.setLanguage(newMovie.getLanguage());
                    movie.setShowtime(newMovie.getShowtime());
                
                    return movieRepository.save(movie);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("movie/{id}")
    Movie getUserById(@PathVariable Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}





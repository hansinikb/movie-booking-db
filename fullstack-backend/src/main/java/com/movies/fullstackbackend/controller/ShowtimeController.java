package com.movies.fullstackbackend.controller;

import com.movies.fullstackbackend.exception.UserNotFoundException;
import com.movies.fullstackbackend.model.Showtime;
import com.movies.fullstackbackend.repository.ShowtimeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
@CrossOrigin("http://localhost:3000")
public class ShowtimeController {
    @Autowired
    private ShowtimeRepository showtimeRepository; // Corrected variable name
    //@Autowired
	//ShowtimeServices showtimeServices;

    //@ResponseBody
    @PostMapping(value="/showtime")
    Showtime newShowtime(@RequestBody Showtime newShowtime){
        
         return showtimeRepository.save(newShowtime); // Corrected variable name
        //return showtimeServices.insertShowtime(newShowtime);
    }
    @GetMapping("/showtimes")
    List<Showtime> getAllShowtimes(){
        return showtimeRepository.findAll(); // Corrected variable name
    }

    @DeleteMapping("/showtime/{id}")
    String deleteShowtime(@PathVariable Long id) {
        if (!showtimeRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        showtimeRepository.deleteById(id);
        return "showtime with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/showtime/{id}")
    Showtime updateShowtime(@RequestBody Showtime newShowtime, @PathVariable Long id) {
        return showtimeRepository.findById(id)
                .map(showtime -> {

                    showtime.setStarttime(newShowtime.getStarttime());
                    showtime.setEndtime(newShowtime.getEndtime());
                    showtime.setDate(newShowtime.getDate());
                    showtime.setMovie(newShowtime.getMovie());
                    showtime.setTheatre(newShowtime.getTheatre());
                    showtime.setBooking(newShowtime.getBooking());

                    return showtimeRepository.save(showtime);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("showtime/{id}")
    Showtime getUserById(@PathVariable Long id) {
        return showtimeRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}




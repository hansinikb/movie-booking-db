package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Theatre;
import com.example.demo.repository.TheatreRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
public class TheatreController {
    @Autowired
    private TheatreRepository theatreRepository; // Corrected variable name

    //@ResponseBody
    @PostMapping(value="/theatre")
    Theatre newTheatre(@RequestBody Theatre newTheatre){

        return theatreRepository.save(newTheatre); // Corrected variable name
    }
    @GetMapping("/theatres")
    List<Theatre> getAllTheatres(){
        return theatreRepository.findAll(); // Corrected variable name
    }

    @DeleteMapping("/theatre/{id}")
    String deleteTheatre(@PathVariable Long id) {
        if (!theatreRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        theatreRepository.deleteById(id);
        return "theatre with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/theatre/{id}")
    Theatre updateTheatre(@RequestBody Theatre newTheatre, @PathVariable Long id) {
        return theatreRepository.findById(id)
                .map(theatre -> {

                    theatre.setName(newTheatre.getName());
                    theatre.setTheatreid(newTheatre.getTheatreid());
                    theatre.setLocation(newTheatre.getLocation());
                    theatre.setScreen(newTheatre.getScreen());
                    theatre.setShowtime(newTheatre.getShowtime());


                    return theatreRepository.save(theatre);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("theatre/{id}")
    Theatre getUserById(@PathVariable Long id) {
        return theatreRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}




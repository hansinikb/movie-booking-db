package com.movies.fullstackbackend.controller;

import com.movies.fullstackbackend.exception.UserNotFoundExceptionString;
import com.movies.fullstackbackend.model.Screen;
import com.movies.fullstackbackend.repository.ScreenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Import the List class

@RestController
@CrossOrigin("http://localhost:3000")
public class ScreenController {
    @Autowired
    private ScreenRepository screenRepository; // Corrected variable name

    //@ResponseBody
    @PostMapping(value="/screen")
    Screen newScreen(@RequestBody Screen newScreen){

        return screenRepository.save(newScreen); // Corrected variable name
    }
    @GetMapping("/screens")
    List<Screen> getAllScreens(){
        return screenRepository.findAll(); // Corrected variable name
    }

    @DeleteMapping("/screen/{id}")
    String deleteScreen(@PathVariable String id) {
        if (!screenRepository.existsById(id)) {
            throw new UserNotFoundExceptionString(id);
        }
        screenRepository.deleteById(id);
        return "screen with id " + id + " has been deleted successfully.";
    }

    @PutMapping("/screen/{id}")
    Screen updateScreen(@RequestBody Screen newScreen, @PathVariable String id) {
        return screenRepository.findById(id)
                .map(screen -> {

                    screen.setNumber(newScreen.getNumber());
                    screen.setCapacity(newScreen.getCapacity());
                    screen.setTheatre(newScreen.getTheatre());

                    return screenRepository.save(screen);
                }).orElseThrow(() -> new UserNotFoundExceptionString(id));
    }

    @GetMapping("screen/{id}")
    Screen getUserById(@PathVariable String id) {
        return screenRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundExceptionString(id));
    }
}




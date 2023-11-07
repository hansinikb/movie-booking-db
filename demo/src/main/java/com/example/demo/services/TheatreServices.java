package com.example.demo.services;
import com.example.demo.repository.TheatreRepository;
import com.example.demo.repository.TheatreRepository;
import com.example.demo.repository.BookingRepository;

import com.example.demo.model.Booking;
import com.example.demo.model.Showtime;
import com.example.demo.model.Theatre;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
@Service
public class TheatreServices {
    @Autowired 
    TheatreRepository theatreRepository;
    public Theatre insertTheatre (Theatre theatre)
    {
        for(Showtime showtime : theatre.getShowtimeList())
		{
			showtime.setTheatre(theatre);
            //bookingRepository.save(booking);
		}
		theatre.setShowtimeList(theatre.getShowtimeList());
        return theatreRepository.save(theatre);
    }
}

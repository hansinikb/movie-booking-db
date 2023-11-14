package com.movies.fullstackbackend.repository;

import com.movies.fullstackbackend.model.Theatre;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;



public interface TheatreRepository extends JpaRepository<Theatre,Long> {
}

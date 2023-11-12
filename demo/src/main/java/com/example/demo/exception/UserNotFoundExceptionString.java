package com.example.demo.exception;


public class UserNotFoundExceptionString extends RuntimeException{
    public UserNotFoundExceptionString(String id){
        super("Could not found the user with id "+ id);
    }
}
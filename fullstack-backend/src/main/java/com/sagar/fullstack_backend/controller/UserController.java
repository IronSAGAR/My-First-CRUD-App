package com.sagar.fullstack_backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sagar.fullstack_backend.exception.UserNotFoundException;
import com.sagar.fullstack_backend.model.User;
import com.sagar.fullstack_backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;







@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/createuser")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User newUser) {
                
        return userRepository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " deleted successfully";
    }

}

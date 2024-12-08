package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.controller.RegisterRequest;
import com.example.jwtmongoauth.authentication.entity.User;
import com.example.jwtmongoauth.authentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String authenticate(String email, String password) {
        // Retrieve the user by email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Verify the password
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Generate and return JWT token
        return jwtUtil.generateToken(email);
    }

    public String register(RegisterRequest request) {
        // Check if email is already registered
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }

        // Create a new user object
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail()); // Use the correct field name here
        user.setPassword(passwordEncoder.encode(request.getPassword())); // Encrypt the password

        // Save the user to the database
        userRepository.save(user);

        return "User registered successfully";
    }


}

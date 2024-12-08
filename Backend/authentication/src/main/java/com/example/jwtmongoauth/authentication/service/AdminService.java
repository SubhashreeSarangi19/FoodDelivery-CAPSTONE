package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.Admin;
import com.example.jwtmongoauth.authentication.entity.User;
import com.example.jwtmongoauth.authentication.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private final AdminRepository adminRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final JwtUtil jwtUtil;

    public AdminService(AdminRepository adminRepository,PasswordEncoder passwordEncoder,JwtUtil jwtUtil){
        this.adminRepository= adminRepository;
        this.passwordEncoder= passwordEncoder;
        this.jwtUtil=jwtUtil;
    }

//    public boolean authenticate(String adminEmail,String adminPassword){
//        Optional<Admin> adminOptional = adminRepository.findByAdminEmail(adminEmail);
//        if(adminOptional.isPresent()){
//            Admin admin = adminOptional.get();
//            return new BCryptPasswordEncoder().matches(adminPassword,admin.getAdminPassword());
//        }
//        throw new BadCredentialsException("Invalid Email or Password");
//    }

    public String authenticate(String adminEmail, String adminPassword) {
        // Retrieve the user by email
        Admin admin = adminRepository.findByAdminEmail(adminEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Verify the password
        if (!passwordEncoder.matches(adminPassword, admin.getAdminPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        // Generate and return JWT token
        return jwtUtil.generateToken(adminEmail);
    }
}

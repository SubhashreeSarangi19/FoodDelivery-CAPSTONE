package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService){
        this.adminService=adminService;
    }

//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody AdminLoginRequest request){
//        try{
//            if(adminService.authenticate(request.getAdminEmail(),request.getAdminPassword())){
//                return ResponseEntity.ok("Admin Login Successful");
//            }
//        }catch(Exception e){
//            return ResponseEntity.status(400).body("Invalid username or password");
//        }
//        return ResponseEntity.status(400).body("Invalid username or password");
//    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest request) {
        String token = adminService.authenticate(request.getAdminEmail(), request.getAdminPassword());
        return ResponseEntity.ok(new AuthResponse(token, "Admin logged in successfully"));
    }
}


class AdminLoginRequest {
    private String adminEmail;
    private String adminPassword;

    // Getters and Setters
    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }
}
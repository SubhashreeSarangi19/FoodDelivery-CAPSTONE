package com.example.jwtmongoauth.authentication;

import com.example.jwtmongoauth.authentication.entity.Admin;
import com.example.jwtmongoauth.authentication.repository.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminSeeder implements CommandLineRunner {
    private final AdminRepository adminRepository;

    public AdminSeeder(AdminRepository adminRepository){
        this.adminRepository=adminRepository;
    }

    @Override
    public void run(String... args) throws Exception{
        if(adminRepository.count()==0){
            Admin admin = new Admin();
            admin.setAdminUsername("admin");
            admin.setAdminEmail("admin@gmail.com");
            String adminPassword = "admin_password";
            admin.setAdminPassword(new BCryptPasswordEncoder().encode(adminPassword));
            adminRepository.save(admin);
            System.out.println("Admin seeded into the database");

        }
    }
}

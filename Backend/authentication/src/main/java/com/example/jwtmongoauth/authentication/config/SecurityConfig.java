package com.example.jwtmongoauth.authentication.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() // Public endpoints (for example, authentication endpoints)
                        .requestMatchers("/admin/login").permitAll() // Allow public access to /admin/login
                        .requestMatchers("/api/user/orders/**").permitAll()
                        .requestMatchers("/api/restaurants/**").permitAll()
                        .requestMatchers("/api/menu/**").permitAll()
                        .requestMatchers("/api/feedbacks/**").permitAll()
                        .requestMatchers("/api/delivery/**").permitAll()
                        .anyRequest().authenticated() // Secure all other endpoints
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless sessions
                );

        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

package com.example.jwtmongoauth.authentication.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    private final String SECRET_KEY="766ed7a36732deb716e838bc8db919ebaaee7499ca49d5a5365f970327c7a8bedbb300a5559441e5e71ad96db5c9e9c1af1f12b3a6ffdccb8e094eb349615dbc70e68f6035776f24d0a06af7cad232e8fd164a5c6a27fefc74d7e2cd7a35f52161c46e0eaa85c4ca35add6c03b354f1df65f282b73d2830e057efe5b54371e9a";

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    public String extractEmail(String token) {
        return extractAllClaims(token).getSubject();
    }

//    public Claims extractAllClaims(String token) {
//        return Jwts.parser()
//                .setSigningKey(getSigningKey())
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//    }

    public Claims extractAllClaims(String token) {
        Key signingKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build() // Build the JwtParser
                .parseClaimsJws(token)
                .getBody();
    }

    public String generateToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, email);
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean validateToken(String token, String email) {
        return extractEmail(token).equals(email) && !isTokenExpired(token);
    }

    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }
}

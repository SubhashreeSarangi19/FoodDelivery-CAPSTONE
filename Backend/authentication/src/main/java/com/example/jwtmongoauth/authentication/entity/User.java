package com.example.jwtmongoauth.authentication.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.ElementCollection;
import javax.persistence.FetchType;


import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles = new HashSet<>();
    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }




    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

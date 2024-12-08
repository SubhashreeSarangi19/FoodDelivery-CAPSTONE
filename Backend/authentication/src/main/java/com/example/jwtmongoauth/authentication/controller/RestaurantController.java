package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.entity.Restaurant;
import com.example.jwtmongoauth.authentication.service.RestaurantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    // GET all restaurants
    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        return ResponseEntity.ok(restaurantService.getAllRestaurants());
    }

    // POST a new restaurant
    @PostMapping("/add")
    public ResponseEntity<Restaurant> saveRestaurant(@RequestBody Restaurant restaurant) {
        restaurant.setRating(Math.max(0, Math.min(5, restaurant.getRating())));
        return ResponseEntity.ok(restaurantService.saveRestaurant(restaurant));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRestaurant(@PathVariable String id) {
        boolean isDeleted = restaurantService.deleteRestaurant(id);
        if (isDeleted) {
            return ResponseEntity.ok("Restaurant with ID " + id + " has been deleted.");
        } else {
            return ResponseEntity.status(404).body("Restaurant with ID " + id + " not found.");
        }
    }
}

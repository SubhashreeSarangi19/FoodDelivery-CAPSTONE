package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.Restaurant;
import com.example.jwtmongoauth.authentication.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository){
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public boolean deleteRestaurant(String id) {
        if (restaurantRepository.existsById(id)) {
            restaurantRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

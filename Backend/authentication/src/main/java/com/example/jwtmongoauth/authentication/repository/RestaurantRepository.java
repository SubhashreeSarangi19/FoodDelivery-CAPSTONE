package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
}

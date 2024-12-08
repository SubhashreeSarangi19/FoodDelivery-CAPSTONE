package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
}

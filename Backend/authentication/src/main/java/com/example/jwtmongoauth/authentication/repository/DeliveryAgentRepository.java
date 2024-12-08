package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.DeliveryAgent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryAgentRepository extends MongoRepository<DeliveryAgent, String > {
    DeliveryAgent findFirstByIsAvailableTrue();
}

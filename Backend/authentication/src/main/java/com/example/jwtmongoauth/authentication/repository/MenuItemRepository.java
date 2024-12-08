package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {
}

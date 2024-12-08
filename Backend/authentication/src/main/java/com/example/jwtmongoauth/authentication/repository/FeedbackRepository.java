package com.example.jwtmongoauth.authentication.repository;

import com.example.jwtmongoauth.authentication.entity.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback,String> {
}
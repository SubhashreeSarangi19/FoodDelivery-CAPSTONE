package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.Feedback;
import com.example.jwtmongoauth.authentication.repository.FeedbackRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository){
        this.feedbackRepository = feedbackRepository;
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
}

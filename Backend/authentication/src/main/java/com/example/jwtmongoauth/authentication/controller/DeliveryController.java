package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.entity.DeliveryAgent;
import com.example.jwtmongoauth.authentication.entity.Feedback;
import com.example.jwtmongoauth.authentication.entity.Order;
import com.example.jwtmongoauth.authentication.repository.DeliveryAgentRepository;
import com.example.jwtmongoauth.authentication.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery")
public class DeliveryController {

    private DeliveryAgentRepository deliveryAgentRepository;

    @Autowired
    private DeliveryService deliveryService;

//    @PostMapping
//    public DeliveryAgent addDeliveryAgent(@RequestBody DeliveryAgent deliveryAgent) {
//        return deliveryAgentRepository.save(deliveryAgent);
//    }

    @PostMapping
    public ResponseEntity<DeliveryAgent> submitFeedback(@RequestBody DeliveryAgent deliveryAgent) {
        DeliveryAgent savedAgents = deliveryService.saveAgents(deliveryAgent);
        return ResponseEntity.ok(savedAgents);
    }

    @GetMapping
    public ResponseEntity<List<DeliveryAgent>> getAllAgents() {
        List<DeliveryAgent> agents = deliveryService.getAllAgents();
        return ResponseEntity.ok(agents);
    }

    @PutMapping("/assign/{orderId}")
    public Order assignDeliveryAgent(@PathVariable String orderId){
        return deliveryService.assignDeliveryAgent(orderId);
    }
}

package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.DeliveryAgent;
import com.example.jwtmongoauth.authentication.entity.Feedback;
import com.example.jwtmongoauth.authentication.entity.Order;
import com.example.jwtmongoauth.authentication.repository.DeliveryAgentRepository;
import com.example.jwtmongoauth.authentication.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;

    public Order assignDeliveryAgent(String orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        DeliveryAgent agent = deliveryAgentRepository.findFirstByIsAvailableTrue();
        if (agent == null) {
            throw new RuntimeException("No available delivery agents");
        }

        agent.setAvailable(false);
        deliveryAgentRepository.save(agent);

        order.setDeliveryAgent(agent);
        return orderRepository.save(order);
    }

    public List<DeliveryAgent> getAllAgents() {
        return deliveryAgentRepository.findAll();
    }

    public DeliveryAgent saveAgents(DeliveryAgent deliveryAgent) {
        return deliveryAgentRepository.save(deliveryAgent);
    }
}

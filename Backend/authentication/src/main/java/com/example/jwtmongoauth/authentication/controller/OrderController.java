package com.example.jwtmongoauth.authentication.controller;

import com.example.jwtmongoauth.authentication.entity.MenuItem;
import com.example.jwtmongoauth.authentication.entity.Order;
import com.example.jwtmongoauth.authentication.service.JwtUtil;
import com.example.jwtmongoauth.authentication.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/user/orders")
public class OrderController {
    private final OrderService orderService;


    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping("/checkout")
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

//    @PostMapping("/checkout")
//    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
//        order.setDate(LocalDate.now());
//        order.setStatus("Delivered"); // Default status
//        return ResponseEntity.ok(orderService.saveOrder(order));
//    }
}

package com.example.jwtmongoauth.authentication.controller;


import com.example.jwtmongoauth.authentication.entity.MenuItem;
import com.example.jwtmongoauth.authentication.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    // Endpoint to get all menu items
    @GetMapping
    public List<MenuItem> getMenuItems() {
        return menuService.getAllMenuItems();
    }

    // Endpoint to add a new menu item
    @PostMapping("/add")
    public MenuItem addMenuItem(@RequestBody MenuItem menuItem) {
        return menuService.addMenuItem(menuItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteMenuItem(@PathVariable String id) {
        menuService.deleteMenuItem(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Menu item with ID " + id + " has been deleted.");
        return ResponseEntity.ok(response);
    }

}

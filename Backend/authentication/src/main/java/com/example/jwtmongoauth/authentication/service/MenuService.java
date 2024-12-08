package com.example.jwtmongoauth.authentication.service;

import com.example.jwtmongoauth.authentication.entity.MenuItem;
import com.example.jwtmongoauth.authentication.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    private final MenuItemRepository menuItemRepository;

    @Autowired
    public MenuService(MenuItemRepository menuItemRepository){
        this.menuItemRepository = menuItemRepository;
    }

    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    public MenuItem addMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }
    public void deleteMenuItem(String id) {
        if (!menuItemRepository.existsById(id)) {
            throw new RuntimeException("Menu item with ID " + id + " not found.");
        }
        menuItemRepository.deleteById(id);
    }

}

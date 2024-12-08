package com.example.jwtmongoauth.authentication.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "menuItems")
public class MenuItem {
    @Id
    private String id;
    private String name;
    private double price;
    private boolean spicy;
    private double rating;
    private int reviews;
    private String description;
    private String image;
    private boolean customizable;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isSpicy() {
        return spicy;
    }

    public void setSpicy(boolean spicy) {
        this.spicy = spicy;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getReviews() {
        return reviews;
    }

    public void setReviews(int reviews) {
        this.reviews = reviews;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isCustomizable() {
        return customizable;
    }

    public void setCustomizable(boolean customizable) {
        this.customizable = customizable;
    }
}

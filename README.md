
# Food Delivery Management System

A **Food Delivery Management System** that provides functionalities for managing restaurants, menu items, delivery agents, and orders. The system supports CRUD operations and allows administrators to assign delivery agents to orders.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [APIs](#apis)
- [Frontend Features](#frontend-features)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

---

## Features
- **Admin Panel**: Manage restaurants, menu items, orders, and delivery agents.
- **Order Management**: Assign delivery agents to orders.
- **Direct MongoDB Integration**: Fetch and update data directly from MongoDB using Data API.
- **Authentication**: JWT-based authentication for secure access.

---

## Technologies Used
### Backend
- **Java (Spring Boot)**: RESTful API development.
- **MongoDB**: Database for managing data.

### Frontend
- **Angular 17**: User interface for managing data and interacting with APIs.
- **Bootstrap/Tailwind CSS**: For responsive UI design.

### Other Tools
- **MongoDB Atlas**: Cloud-hosted MongoDB database.
- **MongoDB Data API**: Direct database access from the frontend.
- **Axios**: HTTP client for API requests.

---

## Setup Instructions
### Prerequisites
1. **Java Development Kit (JDK 17)**
2. **Node.js and npm**
3. **MongoDB Atlas Account**
4. **Angular CLI**

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/food-delivery-backend.git
   cd food-delivery-backend
   ```
2. Configure MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   ```
3. Build and run the backend application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd food-delivery-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`.

---

## APIs

### Admin Login
- **POST /api/auth/admin/login**: To admin login

### User Login/Register
- **POST /api/auth/register**: To user resgister
- **POST /api/auth/login**: To user login

### Restaurant APIs
- **GET /api/restaurants**: Fetch all restaurants.
- **POST /api/restaurants/add**: Add a new restaurant.
- **DELETE /api/restaurants/{id}**: Delete a restaurant by ID.

### Menu APIs
- **GET /api/menu**: Fetch all menu items.
- **POST /api/menu/add**: Add a new menu item.
- **DELETE /api/menu/{id}**: Delete a menu item by ID.

### Delivery Agent APIs
- **GET /api/delivery**: Fetch all delivery agents.
- **PUT /api/delivery/{id}**: Assign delivery agents to OrderId.
- **POST /api/delivery**: Add delivery agents.

### Order APIs
- **GET /api/user/orders**: Fetch all orders.
- **PUT /api/user/orders/checkout**: Post an order.

---

## Frontend Features
### Admin Features
- **Restaurant Management**:
  - Add, view, and delete restaurants.
- **Menu Management**:
  - Add, view, and delete menu items.
- **Order Management**:
  - View all orders.
  - Assign delivery agents to orders.

---

## Usage
1. Launch the backend server (`http://localhost:8080`).
2. Run the Angular frontend (`http://localhost:4200`).
3. Access the admin panel to manage restaurants, menu items, and delivery agents.

---

## Future Enhancements
1. **User Authentication and Roles**: Separate admin and user privileges.
2. **Real-Time Notifications**: Notify users about order updates.
3. **Analytics Dashboard**: Insights on orders, revenue, and ratings.
4. **Mobile Responsiveness**: Improve UI for smaller screens.


Feel free to adjust the details, such as links and database configurations, to match your specific project.

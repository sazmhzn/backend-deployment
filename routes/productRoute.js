import express from "express";

// Import controller functions for handling user routes
import { fetch, create } from "../controller/productController.js";

// Create a new router instance
const route = express.Router();

// Define routes and their corresponding controller functions
route.get("/fetchUser", fetch); // Route to fetch all users
route.get("/user",)
// route.get("/getallusers", fetch); // Route to fetch all users
route.post ("/createUser", create); // Route to create a new user
// route.put("/update/:id", update); // Route to update a user by ID
// route.delete("/delete/:id", deleteUser); // Route to delete a user by ID

// Export the router
export default route;
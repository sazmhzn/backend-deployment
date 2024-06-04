// Import necessary modules
import express from "express"; // Import Express framework
import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions
import bodyParser from "body-parser"; // Import Body-parser for parsing request bodies
import dotenv from "dotenv"; // Import dotenv for loading environment variables
import cors from 'cors'
//Line to to added 
import route from "./routes/productRoute.js"
import routeHome from "./routes/homefromRoute.js";
import routeOrder from "./routes/orderRoute.js";
import routeQuery from "./routes/queryRoute.js";

// Initialize Express app
const app = express();
// const cors = require('cors');
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Load environment variables from .env file
dotenv.config();

// Define port for the server to listen on
const PORT = process.env.PORT || 5000;

// Define MongoDB connection URL from environment variables
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully."); // Log successful database connection
    // Start server on specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`); // Log server running message
    });
  })
  .catch((error) => console.log(error)); // Log error if database connection fails

  // Line to be added 
app.use("/api/product", route);
app.use("/api/homeform", routeHome);
app.use("/api/order", routeOrder);
app.use("/api/query", routeQuery);
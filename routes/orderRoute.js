import express from "express";
import { fetch, create } from "../controller/orderController.js";

const routeOrder = express.Router();

routeOrder.get("/fetchorder", fetch); 
routeOrder.get("/order",)
routeOrder.post ("/createorder", create); 

export default routeOrder;
import express from "express";
import { fetch, create } from "../controller/homeformController.js";

const routeHome = express.Router();

routeHome.get("/fetchhomeform", fetch); 
routeHome.get("/homeform",)
routeHome.post ("/createhomeform", create); 

export default routeHome;
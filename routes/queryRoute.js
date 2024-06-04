import express from "express";
import { fetch, create } from "../controller/queryController.js";

const routeQuery = express.Router();

routeQuery.get("/fetchquery", fetch); 
routeQuery.get("/query",)
routeQuery.post ("/createquery", create); 

export default routeQuery;
import Query from "../model/query.model.js";

// For posting data into the database
export const create = async(req, res)=>{
  try {
      // Create a new Query instance with the request body
      const queryData = new Query( req.body);
      // const {email} = queryData;
      // // Check if a query with the same email already exists
      // const queryExist = await Query.findOne({email})
      // if (queryExist){
      //     return res.status(400).json({message : "Query already exists."})
      // }
      // Save the new query data into the database
      const savedQuery = await queryData.save();
      // Send a success response with the saved query data
      res.status(200).json(savedQuery)
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : "Internal Server Error. "})
  }
}

// For getting all querys from the database
export const fetch = async (req, res)=>{
  try {
      // Find all querys in the database
      const querys = await Query.find();
      // If no querys are found, send a 404 error response
      if(querys.length === 0 ){
          return res.status(404).json({message : "Querys not Found."})
      }
      // Send a success response with the fetched querys data
      res.status(200).json(querys);
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : " Internal Server Error. "})
  }
}
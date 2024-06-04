import User from "../model/userModel.js";

// For posting data into the database
export const create = async(req, res)=>{
  try {
      // Create a new User instance with the request body
      const userData = new User( req.body);
      const {email} = userData;
      // Check if a user with the same email already exists
      const userExist = await User.findOne({email})
      if (userExist){
          return res.status(400).json({message : "User already exists."})
      }
      // Save the new user data into the database
      const savedUser = await userData.save();
      // Send a success response with the saved user data
      res.status(200).json(savedUser)
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : "Internal Server Error. "})
  }
}

// For getting all users from the database
export const fetch = async (req, res)=>{
  try {
      // Find all users in the database
      const users = await User.find();
      // If no users are found, send a 404 error response
      if(users.length === 0 ){
          return res.status(404).json({message : "Users not Found."})
      }
      // Send a success response with the fetched users data
      res.status(200).json(users);
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : " Internal Server Error. "})
  }
}
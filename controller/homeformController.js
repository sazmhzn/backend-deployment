import HomeForm from "../model/homeform.model.js";

// For posting data into the database
export const create = async(req, res)=>{
  try {
      // Create a new HomeForm instance with the request body
      const homeFormData = new HomeForm(req.body);
      // const {email} = homeFormData;
      // // Check if a homeForm with the same email already exists
      // const homeFormExist = await HomeForm.findOne({email})
      // if (homeFormExist){
      //     return res.status(400).json({message : "HomeForm already exists."})
      // }
      // Save the new homeForm data into the database
      const savedHomeForm = await homeFormData.save();
      // Send a success response with the saved homeForm data
      res.status(200).json(savedHomeForm)
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : "Internal Server Error. "})
  }
}

// For getting all homeForms from the database
export const fetch = async (req, res)=>{
  try {
      // Find all homeForms in the database
      const homeForms = await HomeForm.find();
      // If no homeForms are found, send a 404 error response
      if(homeForms.length === 0 ){
          return res.status(404).json({message : "HomeForms not Found."})
      }
      // Send a success response with the fetched homeForms data
      res.status(200).json(homeForms);
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : " Internal Server Error. "})
  }
}
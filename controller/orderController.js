import Order from "../model/order.model.js";

// For posting data into the database
export const create = async(req, res)=>{
  try {
      // Create a new Order instance with the request body
      const orderData = new Order( req.body);
      // const {email} = orderData;
      // // Check if a order with the same email already exists
      // const orderExist = await Order.findOne({email})
      // if (orderExist){
      //     return res.status(400).json({message : "Order already exists."})
      // }
      // Save the new order data into the database
      const savedOrder = await orderData.save();
      // Send a success response with the saved order data
      res.status(200).json(savedOrder)
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : "Internal Server Error. "})
  }
}

// For getting all orders from the database
export const fetch = async (req, res)=>{
  try {
      // Find all orders in the database
      const orders = await Order.find();
      // If no orders are found, send a 404 error response
      if(orders.length === 0 ){
          return res.status(404).json({message : "Orders not Found."})
      }
      // Send a success response with the fetched orders data
      res.status(200).json(orders);
  } catch (error) {
      // Handle any errors and send an internal server error response
      res.status(500).json({error : " Internal Server Error. "})
  }
}
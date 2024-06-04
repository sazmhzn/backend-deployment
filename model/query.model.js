import mongoose from "mongoose";

const QuerySchema = mongoose.Schema({
        email: {
            type: String,
            required : [true, "Please Enter Product Name"],
        },
        subject: {
            type: String,
            required : [true, "Please Enter Product Name"],
        },
        message: {
            type: String,
            required : [true, "Please Enter Product Name"],
        },
        
    },
    {
        timestamps : true,
    }
);

export default mongoose.model("Query", QuerySchema);
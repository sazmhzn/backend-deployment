import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
        first_name: {
            type: String,
            required : [true, "Please Enter First Name"],
        },

        last_name: {
            type: String,
            required : [true, "Please Enter Last Name"],

        },

        company_name: {
            type: String,
            required : [true, "Please Enter Company Name"],
        },

        address: {
            type: String,
            required : [true, "Please Enter Address"],
        },

        country: {
            type: String,
            required : [true, "Please Enter Country"],
        },

        city : {
            type: String,
            required : [true, "Please Enter Region"],
        },

        

        zip: {
            type: Number,
            required : [true, "Please Enter Zip"],
        },

        email: {
            type: String,
            required : [true, "Please Enter Email"],
        },

        phone: {
            type: Number,
            required : [true, "Please Enter Phone Number"],
        },

        notes: {
            type: String,
            required : [true, "Please Enter Additional Notes"],
        },

    },
    {
        timestamps : true,
    }
);


export default mongoose.model("Order", OrderSchema);
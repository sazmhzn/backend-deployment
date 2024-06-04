import mongoose from "mongoose";

const HomeFormSchema = mongoose.Schema({
        name: {
            type: String,
            required : [true, "Please Enter Your Name"],
        },

        email: {
            type: String,
            required : [true, "Please Enter Email"],
        },
        reason: {
            type: String,
            required : [true, "Please Enter Your Reason for Contacting Us"],

        },

        phone: {
            type: Number,
            required : [true, "Please Enter Phone Number"],
        },

        message: {
            type: String,
            required : [true, "Please Enter Your Message Notes"],
        },

    },
    {
        timestamps : true,
    }
);

export default mongoose.model("HomeForm", HomeFormSchema);
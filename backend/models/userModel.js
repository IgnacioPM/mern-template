import mongoose from "mongoose";

const userSquema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add your last name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add your email']
    },
    password: {
        type: String,
        required: [true, 'Please add your password']
    },
},
    {
        timestamps: true,
    })

const User = mongoose.model("User", userSquema);
export default User;
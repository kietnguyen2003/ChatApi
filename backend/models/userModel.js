import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    //fullName, userName, password, confirmPassword, gender
    fullName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    avata:{
        type: String,
        default: "",
    }
},{timestamps: true})

export default mongoose.model("User", userSchema)
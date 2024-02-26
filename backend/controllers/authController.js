import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body

        const existingUser = await User.findOne({ userName })
        if (existingUser) return res.status(400).json({ message: "User already exists" })

        if (password !== confirmPassword) return res.status(400).json({ message: "Password doesn't match" })

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            userName,
            password: hashed,
            gender,
            avata: gender === "male" 
            ? `https://avatar.iran.liara.run/public/boy?username=${userName}` : `https://avatar.iran.liara.run/public/girl?username=${userName}` })

        if(newUser){
            await newUser.save()
            generateToken(newUser._id, res)
        }
        res.status(201).json({ user: newUser })
    } catch (error) {
        console.log("Internal Server Error")
        res.status(500).json({ message: error.message })
    }
}

export const signin = async (req, res) => {
    try {
        const {userName, password} = req.body

        const user = await User.findOne({ userName })
        if (!user) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })

        res.status(200).json({ user })
    } catch (error) {
        console.log("Internal Server Error")
        res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', {
            maxAge: 0,
        });
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Internal Server Error")
        res.status(500).json({ message: error.message })
    }
}
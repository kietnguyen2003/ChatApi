import User from "../models/userModel.js"

export const getUsersforSideBar = async (req, res) => {
    try {
        const loggedUser = req.user._id;
        
        const userSideBar = await User.find({ _id: { $ne: loggedUser } }).select("-password");

        res.status(201).json(userSideBar)
        // res.status(201).json({ users: userSideBar.map(user => ({ name: user.name, id: user._id, profilePic: user.profilePic }))})
    } catch (error) {
        console.log("Error in getUsers: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
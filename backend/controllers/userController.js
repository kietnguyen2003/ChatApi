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

export const getUser = async (req, res) => {
    try {
        const searchInput = req.body.fullName;
        const user = await User.find();
        const normalize = (text) => (text ? text.replace(/\s/g, '').toLowerCase() : '');
        const existingUser = user.filter((user) => {
            return normalize(user.fullName).includes(normalize(searchInput)) ||
                normalize(user.userName).includes(normalize(searchInput));
        });

        console.log(existingUser)
        return res.status(201).json({ users: existingUser })
    } catch (error) {
        console.log("Error in getUser: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
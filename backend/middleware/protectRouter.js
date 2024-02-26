import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRouter = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token Provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRouter: ", error.message)
        res.status(401).json({ message: "Unauthorized" })
    }
}

export default protectRouter;
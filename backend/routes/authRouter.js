import express from "express"
import { signup, signin, logout } from "../controllers/authController.js"

const router = express.Router()

router
    .post("/signup", signup)
    .post("/signin", signin)
    .post("/logout", logout)

export default router
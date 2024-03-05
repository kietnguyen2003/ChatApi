import express from "express"
import { getUsersforSideBar, getUser } from "../controllers/userController.js"
import protectRouter from "../middleware/protectRouter.js"

const route = express.Router()

route
    .get("/", protectRouter ,getUsersforSideBar)
    .get("/get", protectRouter, getUser)

export default route

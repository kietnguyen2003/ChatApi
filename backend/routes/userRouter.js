import express from "express"
import { getUsersforSideBar } from "../controllers/userController.js"
import protectRouter from "../middleware/protectRouter.js"

const route = express.Router()

route
    .get("/", protectRouter ,getUsersforSideBar)

export default route

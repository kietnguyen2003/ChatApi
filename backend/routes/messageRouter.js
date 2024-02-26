import express from "express"
import { sendMessages } from "../controllers/messageController.js"
import protectRouter from "../middleware/protectRouter.js"

const route = express.Router()

route.post("/send/:id", protectRouter, sendMessages)

export default route
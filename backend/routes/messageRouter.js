import express from "express"
import { sendMessages, getMessages } from "../controllers/messageController.js"
import protectRouter from "../middleware/protectRouter.js"

const route = express.Router()

route.post("/send/:id", protectRouter, sendMessages)
    .get("/:id", protectRouter, getMessages)

export default route
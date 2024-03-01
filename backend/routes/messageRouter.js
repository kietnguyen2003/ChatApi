import express from "express"
import { sendMessages, getMessages, getConversations } from "../controllers/messageController.js"
import protectRouter from "../middleware/protectRouter.js"

const route = express.Router()

route
    .get("/conversations", protectRouter, getConversations)
    .post("/send/:id", protectRouter, sendMessages)
    .get("/:id", protectRouter, getMessages)

export default route
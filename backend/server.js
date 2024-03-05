import express from "express"
import dotenv from "dotenv"
import connectToMongoose from "./db/connectToMongoose.js"
import cookieParser from "cookie-parser"

import {app, server} from "./socket/socket.js"
import authRouter from "./routes/authRouter.js"
import messageRouter from "./routes/messageRouter.js"
import userRouter from "./routes/userRouter.js"
dotenv.config()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/message", messageRouter)
app.use("/api/user", userRouter)

server.listen(PORT, () => {
    connectToMongoose();
    console.log(`Server is running on http://localhost:${PORT}`)
})
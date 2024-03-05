import Conservation from "../models/conservationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessages = async (req, res) => {
    try {
        const message = req.body.message;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conservation = await Conservation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conservation) {
            conservation = await Conservation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conservation.messages.push(newMessage);
        }
        await Promise.all([newMessage.save(), conservation.save()]);

        //socket
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessages: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user._id;
        const conservation = await Conservation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");
        if (!conservation) {
            return res.status(201).json({ messages: [] })
        }
        res.status(201).json({ messages: conservation.messages })
    } catch (error) {
        console.log("Error in getMessages: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getConversations = async (req, res) => {
    try {
        const userId = req.user._id;
        const conversations = await Conservation.find({
            participants: userId
        });
        res.status(201).json(conversations);
    } catch (error) {
        console.log("Error in getConversations: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
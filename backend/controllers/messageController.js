import Conversation from "../models/conservationModel.js";
import Message from "../models/messageModel.js"; 

export const sendMessages = async (req, res) => {
    try {
        const message = req.body.message;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conservation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if (!conservation) {
            conservation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (conservation) {
            conservation.messages.push(newMessage);
        }
        await Promise.all([newMessage.save(), conservation.save()]);
        res.status(200).json({ message: "Message sent successfully" })
    } catch (error) {
        console.log("Error in sendMessages: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
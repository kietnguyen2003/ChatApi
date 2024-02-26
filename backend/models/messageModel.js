import moogose from 'mongoose';

const messageSchema = new moogose.Schema({
    senderId:{
        type: moogose.Schema.Types.ObjectId,
        required: true,
    },
    receiverId:{
        type: moogose.Schema.Types.ObjectId,
        required: true,
    },
    message:{
        type: String,
        default: "",        
    },
},{timestamps: true})

const Message = moogose.model('Message', messageSchema);

export default Message;
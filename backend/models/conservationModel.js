import moogoose from 'mongoose';

const conservationSchema = new moogoose.Schema({
    participants: [
        {
            type: moogoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: moogoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: [],
        }, 
    ],
},{timestamps: true})

const Conversation = moogoose.model('Conversation', conservationSchema);

export default Conversation;
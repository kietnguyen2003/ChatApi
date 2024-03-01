import { useAuthContext } from "../../context/AuthContext";
import useConeversations from "../../zustand/userConversation";


const Message = (message) => {
    const { authUser } = useAuthContext();

    const { selectdConversation } = useConeversations()
    const fromMe = message.message.senderId === authUser.user._id;
    const chatClassName = fromMe ? "chat chat-start" : "chat chat-end";
    const myAvatar = fromMe ? authUser.user.avata : selectdConversation.avata;
    const myMess = message.message.message;
    const myName = (fromMe ? authUser.user.fullName : selectdConversation.fullName) + " ";
    let time = new Date(message.message.createdAt).getUTCDate();
    const currentTime = new Date().getUTCDate();
    if (time === currentTime) {
        time = new Date(message.message.createdAt).getHours() + ":" + new Date(message.message.createdAt).getMinutes();
    } else {
        time = new Date(message.message.createdAt).getUTCDate() + "/" + new Date(message.message.createdAt).getUTCMonth() + "/" + new Date(message.message.createdAt).getUTCFullYear();
    }
    return (
        <>
            <div className={chatClassName}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={myAvatar} />
                        <img alt="Tailwind CSS chat bubble component" src="" />
                    </div>
                </div>
                <div className="chat-header">
                    {myName}
                    <time className="text-xs opacity-50">{time}</time>
                </div>
                <div className="chat-bubble">{myMess}</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </>
    )
}

export default Message
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessagesSkeletons from "../skeletons/MessagesSkeletons"

const Messages = () => {
    const { loading, messages } = useGetMessages();

    return (

        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message, idx) => (
                <Message key={idx} message={message} />
            ))}

            {loading && [...Array(3)].map((_, idx) => <MessagesSkeletons key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    )
}

export default Messages
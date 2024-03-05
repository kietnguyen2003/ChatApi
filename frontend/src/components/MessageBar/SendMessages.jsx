import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import toast from "react-hot-toast";


const SendMessages = () => {
    const [message, setMessages] = useState('');
    const {loading, sendMessage} =  useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) {
            toast.error("Please enter a message");
            return
        };
        await sendMessage(message);
        setMessages('');
    }

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <>
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="Send" className="border text-sm rounded-lg block w-full p-2.5
                    bg-gray-700 border-gray-600 text-white"
                    value={message}
                    onChange={(e) => setMessages(e.target.value)}
                    />
                    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        {loading ? <div className="loading loading-spinner"></div> : <IoSend></IoSend>}
                    </button>
                </div>
            </>
        </form>
    )
}

export default SendMessages
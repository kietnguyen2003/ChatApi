import { useState } from 'react';
import toast from "react-hot-toast";
import useConversation from '../zustand/userConversation';


const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectdConversation } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true);
            const res = await fetch(`api/message/send/${selectdConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setMessages(...messages, data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };
}

export default useSendMessage;
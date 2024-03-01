import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from '../zustand/userConversation';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectdConversation  } = useConversation();
    useEffect(()=>{
        const getMessages = async() => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectdConversation._id}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setMessages(data.messages);
            } catch (error) {
                toast.error("Error in useGetMessage",error.message);
                console.log(error.message)
            } finally{
                setLoading(false);
            }
        }
        if(selectdConversation?._id){
            getMessages();
        }
    }, [selectdConversation?._id, setMessages])
    return {loading, messages};
}

export default useGetMessages;
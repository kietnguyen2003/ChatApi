import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conservation";
import { getEmoji } from "../../utils/getEmoji";


const Conservations = () => {

    const {loading, conversations} = useGetConversations();

    return (
        <div className="py-2 flex flex-col overflow-auto">
                {
                    conversations.map((conversation, index) => (
                        <Conversation 
                        key={index}
                        conversation={conversation} 
                        emoji={getEmoji()}
                        lastIdx={index === conversations.length - 1}
                        />
                    ))
                }
                {loading ?<span className="loading loading-spinner mx-auto"></span>:null}
        </div>
    );
}

export default Conservations;
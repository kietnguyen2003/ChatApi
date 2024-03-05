import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetConversation from "../../hooks/useGetConversations";
import useUserConversation from "../../zustand/userConversation";
import toast from "react-hot-toast";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useUserConversation()
    const { conversations } = useGetConversation()
    
    const handleSearch = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 0)
            toast.error("Please enter a valid search");
        const normalize = (text) => (text ? text.replace(/\s/g, '').toLowerCase() : '');
        const existingConversation = conversations.find((conversation) => {
            return normalize(conversation.fullName).includes(normalize(search)) || 
            normalize(conversation.username).includes(normalize(search));
        });
        if(existingConversation){
            setSelectedConversation(existingConversation);
            setSearch('')
        }else {
            toast.error('No user found with that full name or username. Please try again.')
            return
        }
    }
    return (
        <form onSubmit={handleSearch} className="flex">
            <input type="text" placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} className="input input-bordered rounded-full" />
            <button className="btn btn-circle text-white">
                <IoSearch className="w-5 h-5" />
            </button>
        </form>
    );
}

export default SearchInput;
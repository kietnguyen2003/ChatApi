import { create } from 'zustand';

export const useUserConversation = create((set) => ({
    selectdConversation: null,
    setSelectedConversation: (selectdConversation) => set({ selectdConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useUserConversation;
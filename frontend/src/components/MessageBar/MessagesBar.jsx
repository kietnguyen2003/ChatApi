import React, { useEffect } from 'react'
import Messages from './Messages'
import SendMessages from './SendMessages'
import { TiMessages } from 'react-icons/ti'
import useConeversations from '../../zustand/userConversation'
import { useAuthContext } from '../../context/AuthContext'

const MessagesBar = () => {
  const { selectdConversation, setSelectedConversation } = useConeversations()

  useEffect(() => {
    return () => {
      setSelectedConversation(null)
    }
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectdConversation ? <NoChatSelected /> : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className='lable-text'>To:</span>
            <span className='text-gray-900 font-bold'>{selectdConversation.fullName}</span>
          </div>

          <Messages></Messages>
          <SendMessages></SendMessages>
        </>
      )}
    </div>
  )
}
export default MessagesBar

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.user.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

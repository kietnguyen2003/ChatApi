import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/userConversation';
import { useEffect } from 'react';

const useListenMessgaes = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    })

    return () => {
      socket?.off("newMessage")
    }
  }, [socket, setMessages, messages])
}


// const useListenMessgaes = () => {
//     const { socket } = useSocketContext();
//     const { messages, setMessages } = useConversation();

//     console.log(socket);

//     useEffect(() => {
//       socket?.on("newMessage", (newMessage) => {
//         console.log("newMessage: ", newMessage);
//         setMessages((prevMessages) => ({ ...prevMessages, newMessage }));
//       });

//       return () => {
//         socket?.off("newMessage");
//       };
//     }, [socket, setMessages]);
//   };

export default useListenMessgaes;
import React, { useEffect, useRef, useState } from "react";
import { Send, ArrowLeft, Menu } from "lucide-react";
import { Navigate } from "../Navigate";
import { Link, useParams } from "react-router-dom";
import SidbarChat from "./SidbarChat";
import { useSocket } from "../../context/ContextProvider";
import { useGetProfileQuery } from "../redux/api/userApi";
import { imageUrl } from "../redux/api/baseApi";
import img from "../../assets/Home/user.png";

const Chat = () => {
  const { id: chatId } = useParams();
  const { socket } = useSocket();
  const { data: profileData } = useGetProfileQuery();
  const userId = profileData?.data?._id;
    const role = profileData?.data?.role;
    console.log(role)
  const price = profileData?.data?.subscriptionPlanPrice;
console.log(profileData)
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState(null);
  const [info, setInfo] = useState(null);
  const scrollRef = useRef();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ⚡ Block chat if subscription price is 0
if (price === 0 && role !== "Business Idea Lister") {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <p className="text-xl font-semibold mb-4">
        Please buy a subscription to access the chat.
      </p>
      <Link to={"/plane"}>
        <button className="bg-[#0091FF] px-4 py-2 rounded text-white">
          Buy Subscription
        </button>
      </Link>
    </div>
  );
}

  // ✅ Fetch chat messages
  useEffect(() => {
    if (!socket || !chatId) return;

    const handleChats = (res) => {
      if (res?.data) {
        setMessages(res?.data?.messages || []);
        const other = res?.data?.participants.find((p) => p?._id !== userId);
        setReceiverId(other?._id);
        setInfo(other);
      }
    };

    socket.on("chat_message", handleChats);
    socket.emit("chat_message", { chatId });

    return () => socket.off("chat_message", handleChats);
  }, [socket, chatId, userId]);

  // ✅ Handle new incoming message
  useEffect(() => {
    if (!socket || !userId || !receiverId) return;

    const handleMessage = (msg) => {
      const isForCurrentChat =
        (msg?.sender === userId && msg?.receiver === receiverId) ||
        (msg?.sender === receiverId && msg?.receiver === userId);

      if (!isForCurrentChat) return;

      setMessages((prev) => {
        const exists = prev.some((m) => m._id === msg?._id);
        if (exists) return prev;
        return [...prev, { ...msg, fromSelf: msg?.sender === userId }];
      });
    };

    socket.on("send_message", handleMessage);
    return () => socket.off("send_message", handleMessage);
  }, [socket, userId, receiverId]);

  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim() || !receiverId) return;
    socket.emit("send_message", { chatId, userId, receiverId, message: input });
    setInput("");
  };

  // Press Enter to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container m-auto">
      <div className="mt-16 md:mt-7">
        <Navigate title={"Message"} />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden p-2 fixed -mt-32 z-50 rounded bg-gray-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex h-[76vh] bg-white">
        {/* Sidebar (Desktop Only) */}
        <div className="hidden md:block border-r">
          <SidbarChat chatId={chatId} />
        </div>

        {/* Chat Area */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={
                    info?.image
                      ? `${imageUrl}/uploads/profile-image/${info?.image}`
                      : img
                  }
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">{info?.name}</h2>
                <p className="text-sm text-gray-500">Active now</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto no-scrollbar flex flex-col">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-2">
                <img
                  src={
                    info?.image
                      ? `${imageUrl}/uploads/profile-image/${info?.image}`
                      : img
                  }
                  alt="User avatar"
                  className="h-[150px] w-[150px] object-cover rounded-full"
                />
              </div>
              <h2 className="font-semibold text-2xl">{info?.name}</h2>
              <p className="text-sm text-gray-500">Active now</p>
            </div>

            {messages?.map((msg, i) => {
              const isMe = msg?.sender === userId;
              return (
                <div
                  key={msg?._id || i}
                  ref={i === messages?.length - 1 ? scrollRef : null}
                  className={`mb-4 flex ${
                    isMe ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[70%] whitespace-pre-wrap break-all ${
                      isMe
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-100 rounded-bl-none"
                    }`}
                  >
                    <p>{msg?.message}</p>
                    <span className="block text-xs text-gray-400 mt-1">
                      {new Date(msg?.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={scrollRef}></div>
          </div>

          {/* Input */}
          <div className="  p-4 border-t flex items-center gap-2">
            <input
              className="bg-gray-100 border border-blue-400 flex-1 py-2 px-4 rounded-md"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="p-2 rounded-full bg-[#0091FF] hover:bg-blue-600"
              onClick={sendMessage}
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div className="relative bg-white w-72 h-full shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold">Chats</h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <SidbarChat chatId={chatId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

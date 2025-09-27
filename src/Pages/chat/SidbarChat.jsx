import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSocket } from "../../context/ContextProvider";
import { useGetProfileQuery } from "../redux/api/userApi";
import { message } from "antd";
import { imageUrl } from "../redux/api/baseApi";
import { Link } from "react-router-dom";
import img from "../../assets/Home/user.png";
const SidbarChat = ({ chatId }) => {
 
  const { socket, socketLoading, socketError } = useSocket();

  const [chats, setChats] = useState([]);

  const { data: profileData } = useGetProfileQuery();
  const userId = profileData?.data?._id;


  useEffect(() => {
    if (!socket || socketLoading || socketError) {
      return;
    }

    const requestMessageList = () => {
      socket.emit("chat_list", { userId });
    };

    const handleMessageList = (data) => {
    
      setChats(data);
    };

    if (socket.connected) {
      requestMessageList();
    }

    socket.on("connect", requestMessageList);

    socket.on("chat_list", handleMessageList);

    return () => {
      socket.off("connect", requestMessageList);
      socket.off("chat_list", handleMessageList);
    };

  }, [socket, socketLoading, socketError]);


  return (
    <div>
      <div className="w-full md:w-96 border-r bg-white">
        <div className="overflow-y-auto h-[76vh]">
          {chats?.data?.map((i) => {
            const lastMsg = i?.lastMessage;
            const participant = i?.participants[0];
            const isMyMessage = lastMsg?.sender === userId;
            const isUnread = !lastMsg?.isRead && !isMyMessage;

            return (
              <div key={i._id} className="">
                <Link to={`/chat/${i?._id}`}>
                  <div
                    className={`p-4 hover:bg-gray-50 border-b flex items-start gap-3 bg-white`}
                  >
                    {/* Avatar */}
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                   {participant?.image ? (
                <img
                  src={`${imageUrl}/uploads/profile-image/${participant?.image}`}
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={img}
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{participant?.name}</h3>
                        <span className="text-xs text-gray-400">
                          {lastMsg?.createdAt &&
                            new Date(lastMsg?.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                        </span>
                      </div>

                      {/* Last Message */}
                      <p
                        className={`text-sm mt-1 truncate ${
                          isUnread
                            ? "font-semibold text-black"
                            : "text-gray-500"
                        }`}
                      >
                        {lastMsg?.message}
                      </p>
                    </div>

                    {/* Unread Count Badge */}
                    {i?.unreadCount > 0 && (
                      <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {i?.unreadCount}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidbarChat;

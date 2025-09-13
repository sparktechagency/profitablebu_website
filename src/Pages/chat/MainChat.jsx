import React, { useEffect, useState } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { Navigate } from "../Navigate";
import { Link, useParams } from "react-router-dom";
import SidbarChat from "./SidbarChat";
import chat from "../../assets/Home/chat.png";
import { useGetProfileQuery } from "../redux/api/userApi";

const MainChat = () => {
  const { id: receiverId } = useParams();
  const { data: profileData } = useGetProfileQuery();
  const price = profileData?.data?.subscriptionPlanPrice;

  // drawer toggle state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⚡ Block chat if subscription price is 0
  if (price === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <p className="text-xl font-semibold mb-4">
          Please buy a subscription to access the chat.
        </p>
    <Link to={'/plane'}>    <button className="bg-[#0091FF] px-4 py-2 rounded text-white">
          Buy Subscription
        </button></Link>
      </div>
    );
  }

  return (
    <div className="container m-auto mb-20">
      <div className="mt-20 md:mt-11">
        <Navigate title={"Message"} />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden p-2 rounded bg-gray-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="md:flex h-[90vh] bg-white">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block w-72 border-r">
          <SidbarChat />
        </div>

        {/* Main Chat Area */}
        <div className="flex justify-center items-center w-full">
          <div>
            <img className="w-[200px] mb-4" src={chat} alt="" />
            <h1 className="text-center text-4xl">Start Chat</h1>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Drawer panel */}
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
            <SidbarChat />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChat;

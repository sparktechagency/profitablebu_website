import React, { useEffect } from "react";
import { Search, ArrowLeft, Paperclip, Send } from "lucide-react";
import { Navigate } from "../Navigate";
const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container m-auto">
      <div className="mt-20 md:mt-11">
        <Navigate title={"Message"}></Navigate>
      </div>
      <div className="flex h-screen bg-white">
        {/* Sidebar - Conversations */}
        <div className="w-full md:w-96 border-r bg-white">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                className="pl-10 bg-gray-100 border-0 w-full py-2 rounded-md"
                placeholder="Search"
                defaultValue="Mojahid Islam"
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-130px)]">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="p-4 hover:bg-gray-50 border-b flex items-start gap-3 bg-white"
                >
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Lee Williamson</h3>
                      <span className="text-xs text-gray-400">18:31 PM</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Yes, that's gonna work, hopefully.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="hidden md:flex flex-col flex-1">
          {/* Chat Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">Eleanor Pena</h2>
                <p className="text-sm text-gray-500">
                  tim.jennings@example.com
                </p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">Options</span>
              <div className="h-5 w-5 text-gray-400">⋯</div>
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col">
            {/* User Profile */}
            <div className="flex flex-col items-center my-6">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">Eleanor Pena</h2>
              <p className="text-sm text-gray-500">
                Los Angeles, United States
              </p>
            </div>

            {/* Messages */}
            <div className="mt-auto">
              <div className="mb-6">
                <div className="text-xs text-gray-500 text-center mb-2">
                  FRI AT 16:44 PM
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full overflow-hidden mt-1">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
                      <p>Message {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs text-gray-500 text-center mb-2">
                  FRI AT 16:44 PM
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-end mb-4">
                    <div className="bg-gray-200 p-3 rounded-lg max-w-[70%]">
                      <p>Reply {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Paperclip className="h-5 w-5 text-blue-500" />
            </button>
            <input
              className="bg-gray-100 border-0 flex-1 py-2 px-4 rounded-md"
              placeholder="Aa"
            />
            <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600">
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

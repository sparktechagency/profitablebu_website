import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router Link
import { ArrowLeft, X } from "lucide-react";


const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "inquiry",
      title: "New Inquiry Alert!",
      message:
        "You have a new inquiry from Emily Johnson (Los Angeles, CA) about your listed business. View and respond to keep the deal moving.",
      avatar: "/placeholder.svg",
      read: false,
    },
    {
      id: "2",
      type: "inquiry",
      title: "New Inquiry Alert!",
      message:
        "You have a new inquiry from Emily Johnson (Los Angeles, CA) about your listed business. View and respond to keep the deal moving.",
      avatar: "/placeholder.svg",
      read: false,
    },
    {
      id: "3",
      type: "inquiry",
      title: "New Inquiry Alert!",
      message:
        "You have a new inquiry from Emily Johnson (Los Angeles, CA) about your listed business. View and respond to keep the deal moving.",
      avatar: "/placeholder.svg",
      read: false,
    },
    {
      id: "4",
      type: "inquiry",
      title: "New Inquiry Alert!",
      message:
        "You have a new inquiry from Emily Johnson (Los Angeles, CA) about your listed business. View and respond to keep the deal moving.",
      avatar: "/placeholder.svg",
      read: false,
    },
    // অন্যান্য notifications...
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className=" container m-auto bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b flex items-center">
        <Link to="#" className="inline-flex items-center mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-400" />
        </Link>
        <h1 className="text-lg font-medium">Notification</h1>
      </div>

      <div className="divide-y">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 flex items-start gap-3 hover:bg-gray-100 transition-colors"
          >
            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={notification.avatar || "/placeholder.svg"}
                alt="Avatar"
                className="h-full w-full object-cover rounded-full"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm">{notification.title}</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {notification.message}
              </p>
            </div>

            <button
              className="h-8 w-8 text-gray-500 hover:text-red-500"
              onClick={() => dismissNotification(notification.id)}
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-500">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default Notification;

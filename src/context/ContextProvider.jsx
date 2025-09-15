import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useGetProfileQuery } from "../Pages/redux/api/userApi";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
      const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();

      const id = profileData?.data?._id

  const [socketLoading, setSocketLoading] = useState(false);
  const token = localStorage.getItem("accessToken");
//   const token = useSelector((s) => s.logInUser?.token);

  const socketRef = useRef(null);

  useEffect(() => {
    if (!token) {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
      return;
    }

    setSocketLoading(true);

    const socket = io(`http://10.10.20.57:8001`, {
      auth: { token },
      autoConnect: true,
      transports: ["websocket"],
      withCredentials: true,
    });

 
    socket.on("connect", () => {
      setSocketLoading(false);
   
    });

    socket.on("disconnect", () => {

    });

    socketRef.current = socket;

    // Clean up on unmount or token change
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [token]);

  return (
    <SocketContext.Provider
      value={{ socket: socketRef.current, socketLoading }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
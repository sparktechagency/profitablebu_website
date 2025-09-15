import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { io } from 'socket.io-client';
import { SOCKET_BASE } from './baseApi';

 
export const useSocket = () => {
      const token = localStorage.getItem("accessToken");
  
  const [socket, setSocket] = useState(null);


 
  useEffect(() => {
    const newSocket = io(SOCKET_BASE, {
    //   auth: { token: token },
      transports: ['websocket', 'polling'],
      autoConnect: false,
      reconnection: true,
    });
 
    newSocket.connect();
    setSocket(newSocket);
 
    return () => {
      if (newSocket.connected) {
        newSocket.disconnect();
      }
    };
  }, [token]);
 
  return socket;
};
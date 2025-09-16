import { useEffect, useState } from "react";
import { Socket as SocketIO } from "socket.io-client";
import { socketClient } from "../utils/socket";
export default function Socket() {
  const [socket, setSocket] = useState<SocketIO | null>(null);
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const socket = socketClient.getConnection();
    setSocket(socket);
    // return () => {
    //   if (socket) {
    //     socketClient.disconnect();
    //     socket.off("connect");
    //     socket.off("disconnect");
    //   }
    // };
  }, []);

  useEffect(() => {
    socket?.on("new-message", (payload) => {
      setMessage(payload);
    });
  }, [socket]);
  const handleClick = () => {
    socket?.emit("message", "Xin chào anh em");
  };
  const handleClick2 = () => {
    socket?.emit("message-2", "Unicode");
  };
  return (
    <div>
      <h1 className="text-3xl">{message}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
    </div>
  );
}

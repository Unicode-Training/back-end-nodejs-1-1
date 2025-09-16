/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { socketClient } from "../utils/socket";
import { Socket } from "socket.io-client";
// let timeoutId: NodeJS.Timeout | null = null;
export default function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log("Gõ");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log("Dừng");
    }, 500);
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    socket?.emit("send-message", message);
  };
  useEffect(() => {
    const socket = socketClient.getConnection();
    setSocket(socket);
    socket?.emit("load-message");
    socket?.on("new-message", (data) => {
      setMessageList(data);
    });
  }, []);
  return (
    <div className="w-[400px]">
      <h1 className="text-3xl">Chat</h1>
      <div className="w-[400px] h-[400px] overflow-auto mx-auto border p-3">
        {messageList.map((message, index) => (
          <p key={index} className="mb-3">
            {message}
          </p>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <div className="flex">
          <Input
            placeholder="Nhập tin nhắn..."
            className="rounded-none"
            onChange={handleChange}
          />
          <Button className="rounded-none">Gửi</Button>
        </div>
      </form>
    </div>
  );
}

import { io, Socket } from "socket.io-client";
export const socketClient: {
  socketInstance: null | Socket;
  connect: () => void;
  getConnection: () => null | Socket;
  disconnect: () => void;
} = {
  socketInstance: null,
  connect() {
    const socket = io("ws://localhost:8080");
    this.socketInstance = socket;
  },
  disconnect() {
    if (this.socketInstance) {
      this.socketInstance.disconnect();
      this.socketInstance = null;
    }
  },
  getConnection() {
    if (!this.socketInstance) {
      this.connect();
    }
    return this.socketInstance;
  },
};

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const messageList: string[] = [];

@WebSocketGateway(8080, {
  cors: {
    origin: '*',
  },
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server; //Chứa đối tượng của socket server

  //Kết nối
  handleConnection(client: Socket) {
    console.log('Kết nối server: ' + client.id);
  }

  //Ngắt kết nối
  handleDisconnect(client: Socket) {
    console.log('Ngắt kết nối server: ' + client.id);
  }

  // @SubscribeMessage('message')
  // handleMessage(client: Socket, payload: any) {
  //   console.log('Message from: ' + client.id);
  //   console.log(`Payload: ${payload}`);
  //   client.broadcast.emit('new-message', 'Cái này từ server nhé');
  // }

  // @SubscribeMessage('message-2')
  // handleMessage2(client: Socket, payload: any) {
  //   console.log(payload);
  // }

  @SubscribeMessage('send-message')
  handleSendMessage(client: Socket, payload: any) {
    messageList.push(payload as string);
    this.server.emit('new-message', messageList);
  }

  @SubscribeMessage('load-message')
  handleLoadMessage() {
    this.server.emit('new-message', messageList);
  }
}

//Client --> Server làm việc thông qua message
//Client muốn server làm gì đó --> Gửi message lên --> Server lắng nghe message --> Xử lý --> Gửi message về client --> Client lắng nghe được --> Cập nhật giao diện

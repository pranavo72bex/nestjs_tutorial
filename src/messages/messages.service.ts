import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  message: Message[] = [{ name: 'name', text: 'test' }];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.message.push(message);
    return message;
  }
  identify(name: string, clientId: string) {
    this.clientToUser[clientId];
    return Object.values(this.clientToUser);
  }
  getClientName(clientId: string) {

  }
  findAll() {
    return this.message;
  }
}

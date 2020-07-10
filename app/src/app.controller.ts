import { Controller } from '@nestjs/common';
import { MessagePattern, Payload} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }

  @MessagePattern('authorize_user')
  async handleMessagePrinted(@Payload() data: Record<string, unknown>): Promise<any> {
    return { received: data, status: 'Authorized' };
  }
}

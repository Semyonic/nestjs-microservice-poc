import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from "rxjs";

@Controller()
export class AppController implements OnModuleInit {
  constructor(@Inject('ClientService') private readonly client: ClientProxy) { }

  async onModuleInit() {
    await this.client.connect();
  }

  @Get()
  getHello(): Observable<any> {
    return this.client.send<any>('authorize_user', { name: 'Semih' });
  }
}

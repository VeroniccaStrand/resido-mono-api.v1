import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthCenterService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class BlackAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}

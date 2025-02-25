import { Injectable } from '@nestjs/common';

@Injectable()
export class ResidoCoreService {
  getHello(): string {
    return 'Hello World!';
  }
}

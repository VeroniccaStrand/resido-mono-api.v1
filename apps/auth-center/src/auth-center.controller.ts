import { Controller, Get } from '@nestjs/common';
import { AuthCenterService } from './auth-center.service';

@Controller()
export class AuthCenterController {
  constructor(private readonly authCenterService: AuthCenterService) {}

  @Get()
  getHello(): string {
    return this.authCenterService.getHello();
  }
}

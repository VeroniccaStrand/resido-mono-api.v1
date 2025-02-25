import { Controller, Get } from '@nestjs/common';
import { BlackAdminService } from './black-admin.service';

@Controller()
export class BlackAdminController {
  constructor(private readonly blackAdminService: BlackAdminService) {}

  @Get()
  getHello(): string {
    return this.blackAdminService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ResidoCoreService } from './resido-core.service';

@Controller()
export class ResidoCoreController {
  constructor(private readonly residoCoreService: ResidoCoreService) {}

  @Get()
  getHello(): string {
    return this.residoCoreService.getHello();
  }
}

import { Module } from '@nestjs/common';
import { ResidoCoreController } from './resido-core.controller';
import { ResidoCoreService } from './resido-core.service';

@Module({
  imports: [],
  controllers: [ResidoCoreController],
  providers: [ResidoCoreService],
})
export class ResidoCoreModule {}

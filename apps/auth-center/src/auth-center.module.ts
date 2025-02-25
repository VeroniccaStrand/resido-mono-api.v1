import { Module } from '@nestjs/common';
import { AuthCenterController } from './auth-center.controller';
import { AuthCenterService } from './auth-center.service';

@Module({
  imports: [],
  controllers: [AuthCenterController],
  providers: [AuthCenterService],
})
export class AuthCenterModule {}

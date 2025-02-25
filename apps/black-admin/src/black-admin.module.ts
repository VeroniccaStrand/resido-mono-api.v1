import { Module } from '@nestjs/common';
import { BlackAdminController } from './black-admin.controller';
import { BlackAdminService } from './black-admin.service';
import { TenantModule } from './tenant/tenant.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TenantModule, DatabaseModule],
  controllers: [BlackAdminController],
  providers: [BlackAdminService],
})
export class BlackAdminModule {}

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTenantDto } from 'apps/black-admin/src/tenant/dto/create-tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(
    @Inject('BLACK_ADMIN_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Post()
  createTenant(@Body() createTenantDto: CreateTenantDto) {
    return this.client.send({ cmd: 'create-tenant' }, { createTenantDto });
  }
}

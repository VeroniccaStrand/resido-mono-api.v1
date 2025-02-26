import { Controller, Post, Body } from '@nestjs/common';
import { TenantsService } from './tenants/tenants.service';
import { CreateTenantDto } from '@app/contracts/tenants/create-tenant.dto';
import { TenantPublicDto } from './tenants/tenant-public.dto';

@Controller('tenants') // ✅ API Gateway exponerar HTTP för frontend
export class GatewayApiController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post()
  async create(
    @Body() createTenantDto: CreateTenantDto,
  ): Promise<TenantPublicDto> {
    return this.tenantsService.createTenant(createTenantDto);
  }
}

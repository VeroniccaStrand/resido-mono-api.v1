import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TENANT_PATTERNS } from '@app/contracts/tenants/tenants.patterns';

import { CreateTenantDto } from './dto/create-tenant.dto';

import { TenantService } from './tenant.service';
import { TenantDto } from '@app/contracts/tenants/tenant.dto';

@Controller()
export class TenantController {
  constructor(private readonly tenantsService: TenantService) {}

  @MessagePattern(TENANT_PATTERNS.CREATE)
  async create(
    @Payload() createTenantDto: CreateTenantDto,
  ): Promise<TenantDto> {
    return this.tenantsService.createTenant(createTenantDto);
  }
}

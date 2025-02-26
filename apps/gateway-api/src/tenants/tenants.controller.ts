import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TenantsService } from './tenants.service';
import { TENANT_PATTERNS } from '@app/contracts/tenants/tenants.patterns';
import { TenantDto } from '@app/contracts/tenants/tenant.dto';
import { CreateTenantDto } from '@app/contracts/tenants/create-tenant.dto';

@Controller()
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @MessagePattern(TENANT_PATTERNS.CREATE)
  async createTenant(
    @Payload() createTenantDto: CreateTenantDto,
  ): Promise<TenantDto> {
    const tenant = await this.tenantsService.createTenant(createTenantDto);

    // 🔹 När Black-Admin har skapat tenanten, skicka till Resido-Core
    return this.tenantsService.sendToResidoCore(tenant);
  }
}

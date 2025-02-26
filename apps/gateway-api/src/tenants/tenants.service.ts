import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { TENANT_PATTERNS } from '@app/contracts/tenants/tenants.patterns';

import { TenantPublicDto } from './tenant-public.dto';
import { TenantDto } from '@app/contracts/tenants/tenant.dto';
import { CreateTenantDto } from '@app/contracts/tenants/create-tenant.dto';

@Injectable()
export class TenantsService {
  constructor(
    @Inject('BLACK_ADMIN_SERVICE')
    private readonly blackAdminClient: ClientProxy,
    @Inject('RESIDO_SERVICE') private readonly residoClient: ClientProxy,
  ) {}

  async createTenant(createTenantDto: CreateTenantDto): Promise<TenantDto> {
    return firstValueFrom(
      this.blackAdminClient.send<TenantDto, CreateTenantDto>(
        TENANT_PATTERNS.CREATE,
        createTenantDto,
      ),
    );
  }

  async sendToResidoCore(tenant: TenantDto): Promise<TenantDto> {
    return firstValueFrom(
      this.residoClient.send<TenantDto, TenantDto>(
        TENANT_PATTERNS.CREATE_SCHEMA,
        tenant,
      ),
    );
  }

  /**
   * 🔹 Mappa `TenantDto` till `TenantPublicDto` innan svaret skickas till frontend
   */
  private mapTenantDto(tenantDto: TenantDto): TenantPublicDto {
    return {
      companyName: tenantDto.companyName,
      createdAt: tenantDto.createdAt,
    };
  }
}

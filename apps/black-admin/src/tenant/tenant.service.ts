import { Injectable } from '@nestjs/common';
import { MikroORM, EntityManager } from '@mikro-orm/core';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { Tenant } from './entities/tenant.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TenantService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}

  async createTenant(dto: CreateTenantDto): Promise<Tenant> {
    const { companyName } = dto;

    return this.orm.em.transactional(async (em) => {
      const count = await em.count(Tenant);
      const sequenceNumber = String(count + 1).padStart(3, '0'); // Ex: 001, 002, 003

      const schemaName = `tenant_${companyName.toLowerCase().replace(/[^a-z0-9_]/g, '')}_${sequenceNumber}`;

      const salt = await bcrypt.genSalt(10);
      const schemaKey = await bcrypt.hash(schemaName, salt);

      const tenant = new Tenant();
      tenant.companyName = companyName;
      tenant.schemaKey = schemaKey;
      tenant.isActive = true;

      await em.persistAndFlush(tenant);
      return tenant;
    });
  }
}

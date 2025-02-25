import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Controller()
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @MessagePattern({ cmd: 'createTenant' })
  async create(@Payload() createTenantDto: CreateTenantDto) {
    try {
      const tenant = await this.tenantService.createTenant(createTenantDto);
      return { success: true, message: 'Tenant created successfully', tenant };
    } catch (error) {
      return {
        success: false,
        message: 'Error creating tenant',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  @MessagePattern('findAllTenant')
  findAll() {
    return this.tenantService.findAll();
  }

  @MessagePattern('findOneTenant')
  findOne(@Payload() id: number) {
    return this.tenantService.findOne(id);
  }

  @MessagePattern('updateTenant')
  update(@Payload() updateTenantDto: UpdateTenantDto) {
    return this.tenantService.update(updateTenantDto.id, updateTenantDto);
  }

  @MessagePattern('removeTenant')
  remove(@Payload() id: number) {
    return this.tenantService.remove(id);
  }
}

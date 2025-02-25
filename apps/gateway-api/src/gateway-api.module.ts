import { Module } from '@nestjs/common';
import { GatewayApiController } from './gateway-api.controller';
import { GatewayApiService } from './gateway-api.service';
import { TenantsModule } from './tenants/tenants.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TenantsModule,
    ClientsModule.register([
      {
        name: 'BLACK_ADMIN_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 4001,
        },
      },
    ]),
  ],
  controllers: [GatewayApiController],
  providers: [GatewayApiService],
})
export class GatewayApiModule {}

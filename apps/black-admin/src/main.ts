import { NestFactory } from '@nestjs/core';
import { BlackAdminModule } from './black-admin.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BlackAdminModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4001,
      },
    },
  );
  await app.listen();
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ResidoCoreModule } from './resido-core.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ResidoCoreModule);
  await app.listen();
}
bootstrap();

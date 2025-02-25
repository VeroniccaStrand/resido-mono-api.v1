import { NestFactory } from '@nestjs/core';
import { ResidoCoreModule } from './resido-core.module';

async function bootstrap() {
  const app = await NestFactory.create(ResidoCoreModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

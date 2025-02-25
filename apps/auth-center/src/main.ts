import { NestFactory } from '@nestjs/core';
import { AuthCenterModule } from './auth-center.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthCenterModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { ResidoCoreController } from './resido-core.controller';
import { ResidoCoreService } from './resido-core.service';
import { DatabaseResidoModule } from './database-resido/database-resido.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }).options({
        allowUnknown: true, // Tillåt okända variabler
        abortEarly: false, // Samla alla valideringsfel istället för att stanna vid första
      }),
    }),
    DatabaseResidoModule,
  ],
  controllers: [ResidoCoreController],
  providers: [ResidoCoreService],
})
export class ResidoCoreModule {}

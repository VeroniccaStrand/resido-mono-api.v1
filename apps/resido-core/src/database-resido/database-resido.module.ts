import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from './mikro-orm-tenant.config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig)],
  exports: [],
})
export class DatabaseResidoModule {}

import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';
import { Tenant } from '../tenant/entities/tenant.entity';

dotenv.config(); // Laddar miljövariabler från .env

const mikroOrmConfig: MikroOrmModuleOptions = {
  driver: PostgreSqlDriver,
  entities: [Tenant],
  dbName: process.env.DB_NAME,

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  schema: 'public',
  autoLoadEntities: true,
  debug: process.env.NODE_ENV !== 'production',
};

export default mikroOrmConfig;

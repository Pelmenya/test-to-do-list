import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import ToDoList from '../to-do-list/to-do-list.entity';

export const getPostgresConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities: [ToDoList],
    synchronize: true,
  };
};

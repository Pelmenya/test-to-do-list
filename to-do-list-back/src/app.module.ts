import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ToDoListModule } from './modules/to-do-list/to-do-list.module';

@Module({
  imports: [DatabaseModule, ToDoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

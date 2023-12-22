import { Module } from '@nestjs/common';
import { ToDoListController } from './to-do-list.controller';
import { ToDoListService } from './to-do-list.service';

@Module({
  controllers: [ToDoListController],
  providers: [ToDoListService],
  exports: [ToDoListService],
})
export class ToDoListModule {}
